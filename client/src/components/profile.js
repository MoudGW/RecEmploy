import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import API from '../API/API';
import Modal from 'react-modal';
let id= sessionStorage.getItem('_id');
class profile extends Component {
 	state={
    edit:false,
    modalIsOpen: false,
    target:'',
    targetvalue:'',
    disabled:'',
    user:''
 	};
 	componentWillMount(){
 		   if(this.props.match.params.id===id)
 		   {
 		   	this.setState({edit:true})
 		   }
           if(!id)
           {
            this.props.history.push('/')
           }
           else{
 		   API.getuser(id).then((user)=>{
           this.setState({user:user.data[0]})
 		   });
 	       }
 	}
 	openModal(){
    this.setState({modalIsOpen: true});
    }
    closeModal=()=>{
    this.setState({modalIsOpen: false});
    this.setState({targetvalue:''});
    this.setState({target:''});
    }
    update=(event)=>{
    event.preventDefault();
    this.setState({target:event.target.id});
    this.openModal();
    }
    onChange= (event)=> {
    this.setState({targetvalue: event.target.value});
    }
    onupdate=()=>{
    	let data={
    		[this.state.target]:this.state.targetvalue
    	}
      API.update(id,data).then(
        ()=>{
            this.closeModal()
        })
    }
    Upload=(event)=>
    {
    if(this.state.target==='photo')	
    {
    this.setState({disabled:true});
    API.upload(event.target.files[0]).then(response => {
    this.setState({targetvalue:[response.data.secure_url]});
    this.setState({disabled:''});
    })
    }
    if (this.state.target==='video') {
    this.setState({disabled:true});
    API.upload(event.target.files[0]).then(response => {
    this.setState({targetvalue:[response.data.secure_url]});
    this.setState({disabled:''});
    })
    }
    }

    render() {
    return (
     <div>
     <Modal
     ariaHideApp={false}
     isOpen={this.state.modalIsOpen}
     onAfterOpen={this.afterOpenModal}
     onRequestClose={this.closeModal}
     style={{
     overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.75)'
     },
     content : {
     width                 : "50%",
     top                   : '50%',
     left                  : '50%',
     right                 : 'auto',
     bottom                : 'auto',
     marginRight           : '-50%',
     transform             : 'translate(-50%, -50%)',
    }
     }}
     >
     <div>
     <div className='center'><h4>Edit {this.state.target}</h4></div>
     <hr style={{width:'50%'}}/>
     {this.state.target==='photo' || this.state.target==='video' ?
     <div className="input-field"><input className="input-field" type='file' accept="file_extension|audio/*|video/*|image/*|media_type" onChange={this.Upload.bind(this)}/></div>
     :
     <textarea onChange={this.onChange} className="materialize-textarea"></textarea> }
     <button onClick={this.onupdate} disabled={this.state.disabled} className="btn">update</button>

     </div>
    </Modal>
      {/* start NavBar */}
     <div className="navbar-fixed">
     <nav className="grey lighten-2">
     <div className="nav-wrapper container">
     <span className='logo'>RecEmploy</span>
     <ul className="right hide-on-med-and-down">
      <li>
     <a onClick={this.props.history.goBack} className="sign bleu">Home</a>
     </li>
     <li>
     <a  className="sign red-text">Sign Out</a>
     </li>
     </ul>
     <ul className="side-nav">
     <li>
     <a className="sign bleu darken-2">Profile</a>
     </li>
     <li>
     <a className="sign red darken-2">Sign Out</a>
     </li>
     </ul>
     <a data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
     </div>
     </nav>
     </div>
     {/* End NavBar */}
         <div className="container">
        <div className="row">
        <div className='col center s12 profile'>
        {this.state.user.video ?
        <video width="800" height="400">
        <source src={this.state.user.video} type="video/mp4"/>
        </video>: <img className='z-depth-1' height="400" src="http://surima.pl/media/surima-no-video.png"/>}
        {this.state.edit ?<a  onClick={this.update}  className="btn btn-floating shadow video-profile z-depth-5 edit">
        <i id='video' className="material-icons">edit</i></a>:null }
        </div>
        <div style={{position:"relative"}}className='col center s12'>
        <img className='profile-photo z-depth-5' width="250" height="250" src={this.state.user.photo ? this.state.user.photo :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7jsQsu-GP0SV74mjcvgACwxRZdXyv1z7Sut_Cwe-vBgn9SgV"}/>
        {this.state.edit ?<a onClick={this.update} className="btn shadow btn-floating edit z-depth-5" ><i id='photo' className="material-icons">edit</i></a>:null }
        </div>
        <div className='col center s12'>
        <ul className="collection with-header">
        <li className="collection-header">
        <h4>About me</h4>
        <hr style={{width:'10%'}}/>
        <p className="flow-text">{this.state.user.about}</p>
        {this.state.edit ? <a onClick={this.update} className="btn shadow btn-floating  z-depth-5"><i  id='about' className="material-icons">edit</i></a>:null }
        </li>
        <li className="collection-item">
        <h4>Skills</h4>
        <hr style={{width:'10%'}}/>
        <p className="flow-text">{this.state.user.skills}</p>
        {this.state.edit ? <a onClick={this.update} className="btn shadow btn-floating  z-depth-5" ><i className="material-icons"  id="skills">edit</i></a>:null }
        </li>
        <li className="collection-item">
        <h4>Experience</h4>
        <hr style={{width:'10%'}}/>
        <p className="flow-text">{this.state.user.experience}</p>
        {this.state.edit ? <a onClick={this.update} className="btn shadow btn-floating  z-depth-5" ><i id='experience' className="material-icons">edit</i></a>:null }
        </li>
        </ul>
        </div>
        </div>
        </div>
     </div>


      )
       }
}
export default profile;