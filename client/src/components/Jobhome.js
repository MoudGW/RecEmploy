import React, { Component } from "react";
import API, {captureUserMedia}  from '../API/API';
import RecordRTC from 'recordrtc';
import Modal from 'react-modal';
    let that;
     let id= sessionStorage.getItem('_id');
const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                        navigator.mozGetUserMedia || navigator.msGetUserMedia);
const customStyles = {
  content : {
    width                 : "50%",
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
}; 
class Jobhome extends Component {

    state = {
      search:'',
      jobs:[],
      showresult:false,
      modalIsOpen:false,
      target:'',
      recordVideo: null,
      src: null,
      recordState:false,
      uploading: false,
      target:'',
      disabled:'disabled'
    }
    componentDidMount() {
           that=this;
    }
    componentWillMount() {
           let user=sessionStorage.getItem('type'); 
           if(!id || user!=='JobSeeker')
           {
            this.props.history.push('/')
           }
    }
   requestUserMedia() {
    console.log('requestUserMedia')
    captureUserMedia((stream) => {
      this.setState({ src: window.URL.createObjectURL(stream) });
      console.log('setting state', this.state)
    });
   }

  startRecord() {
          if(!hasGetUserMedia) {
      alert("Your browser cannot stream from your webcam. Please switch to Chrome or Firefox.");
      return;
       }
   this.setState({ recordState: false});
    captureUserMedia((stream) => {
      this.state.recordVideo = RecordRTC(stream, { type: 'video' });
      this.state.recordVideo.startRecording();
    });
    this.setState({ disabled:''});
   } 

  stopRecord() {
    this.setState({ recordState: true});
    this.state.recordVideo.stopRecording(() => {
      let params = this.state.recordVideo.getBlob();
      console.log(params.data)
      this.setState({ uploading: true });
      API.uploadVideo(params)
      .then((success) => {
        console.log('enter then statement')
        if(success) {
          console.log(success.data.secure_url)
          this.setState({disabled: 'disabled'});
          this.setState({modalIsOpen: false});
          this.setState({uploading: false });
          let data={
           'jobsid':this.state.target,
           'Applicant_id':sessionStorage.getItem('_id'),
           'URL_Video':success.data.secure_url
          }
          API.addapli(data).then((res)=>{
            console.log(res);
          });
        }
      }, (error) => {
    
      })
    });
    }
    onChange= function(event) {
      this.setState({search: event.target.value});
    }
    onClick= function(event) {
        event.preventDefault();
    API.getData(this.state.search).then((res) => {
      this.setState({jobs:res.data});
       console.log(this.state.jobs);
    });
    }
    apply= function(event){
    event.preventDefault();
      let id=event.target.value;
      that.setState({target:id})
      that.openModal()
      that.requestUserMedia();
     }
     openModal() {
     this.setState({modalIsOpen: true});
     }
     closeModal() {
     this.setState({modalIsOpen: false});
     }
     signout=()=>{
      sessionStorage.clear();
      this.props.history.push('/');
     }
     displayresult=() => {
     return(
     this.state.jobs.map(job =>
        <li className="collection-item" style={{padding:'50px',borderBottom:'1px solid gray'}} key={job._id}>  
        <span><h3>{job.title}</h3></span>
        <br></br>
        <p><strong>Description: </strong>{job.description}</p>
        <p><strong>Type: </strong>{job.type}</p>
        <p><strong>Locations: </strong>{job.locations}</p>
        <p><strong>classification: </strong>{job.classification}</p>
        <div className='right'>
        <button className=' waves-light btn' onClick={this.apply} value={job._id} >apply</button>
        </div>
         </li>
        )
     )
     }
      render() {
        return (
       <div>
       <Modal
        ariaHideApp={false}
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal.bind(this)}
        style={customStyles}
        >
        <div className='center'><p style={{fontSize:'20px'}} className='chip'>send a short video about yourself</p></div> 
        <div className='video'>
        <video className='videocontent' autoPlay muted src={this.state.src}></video>
        <div className='center' style={{width:'200%'}}>
        {this.state.uploading ?<a className="btn btn-large" disabled='disabled'>uploading</a>:
        <div>
        <a className="waves-light white-text red btn" disabled={!this.state.disabled} onClick={this.startRecord.bind(this)}><i className="material-icons left">fiber_manual_record</i>Start</a>
        <a className="waves-light btn" disabled={this.state.disabled} onClick={this.stopRecord.bind(this)}><i className="material-icons left">send</i>Stop & Send</a></div>}</div>
        </div>
        </Modal>  
         {/* start NavBar */}
     <div className="navbar-fixed">
     <nav className="grey lighten-2">
     <div className="nav-wrapper container">
     <span className='logo'>RecEmploy</span>
     <ul className="right hide-on-med-and-down">
      <li>
     <a onClick={()=>{this.props.history.push('/user/'+id)}} className="sign bleu">Profile</a>
     </li>
     <li>
     <a onClick={this.signout} className="sign red-text">Sign Out</a>
     </li>
     </ul>
     <ul className="side-nav">
     <li>
     <a onClick={()=>{this.props.history.push("/user/"+id)}} className="sign bleu darken-2">Profile</a>
     </li>
     <li>
     <a onClick={this.signout}  className="sign red darken-2">Sign Out</a>
     </li>
     </ul>
     <a data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
     </div>
     </nav>
     </div>
     {/* End NavBar */}
     {/* Center */}
        <div className="container bar">
        <div className="row">
        <div className="col s12 center">
        <label><h1>Search for Jobs</h1></label>
        <div className="input-field flow-text center-align">
        <input style={{fontSize:'30px'}} className="center-align" id="search" onChange={this.onChange.bind(this)} type="search"/>
        <i onClick={this.onClick.bind(this)} className="material-icons Medium">search</i>
        </div>
        </div>
        </div>
        <ul>
        {this.state.jobs.length ? this.displayresult() : null}
        </ul>
        </div>

        </div>
        )
      }
    }
   
    export default Jobhome;