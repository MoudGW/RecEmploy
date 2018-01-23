import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import API from '../API/API';
import Modal from 'react-modal';
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
class home extends Component {
  state = {
    modalIsOpen1: false,
    modalIsOpen2: false,
    user:'Recruiter',
    First:'',
    Password:'',
    Last:'',
    Email:'',
    Resume:''
  };
  componentDidMount() {
    console.log(this);
  }
  openModal1() {
    this.setState({modalIsOpen1: true});
  }
  openModal2() {
    this.setState({modalIsOpen2: true});
  }
  closeModal1() {
    this.setState({modalIsOpen1: false});
  }
  closeModal2() {
    this.setState({modalIsOpen2: false});
  }
  onChange= function(event) {
    console.log(event.target.value);
  this.setState({[event.target.placeholder]: event.target.value});
  }
  onChangeUser= function(event) {
  this.setState({user: event.target.value});
  }
  onClickSubmit= function() {
  let user={
    'First':this.state.First,
    'Last':this.state.Last,
    'Email':this.state.Email,
    'Pwd':this.state.Password,
    'Resume':this.state.Resume,
    'Usertype':this.state.user
  };
API.newuser(user).then(
  window.location.reload()
  )
 }
 onClickConnect=function(event){
  event.preventDefault();
    console.log(this);
     let Email=this.state.Email;
     let Password=this.state.Password;
    API.authentification(Email,Password).then((res) => {
       {res.data[0].Usertype==='Recruiter' ?  this.props.history.push('/Rec_home') : window.location.reload()}
       {res.data[0].Usertype==='JobSeeker' ?  this.props.history.push('/Jobhome')  : window.location.reload()}
    });
  }
  render() {
    return (
     <div>
     <Modal
     isOpen={this.state.modalIsOpen1}
     onAfterOpen={this.afterOpenModal1}
     onRequestClose={this.closeModal1.bind(this)}
     style={customStyles}
     >
     <div className='container'>
     <label><h2 className="center-align">Sign Up</h2></label>
     <form >
     <input className='input-field' onChange={this.onChange.bind(this)} placeholder="First"/>
     <input className='input-field' onChange={this.onChange.bind(this)} placeholder="Last"/>
     <input className='input-field' onChange={this.onChange.bind(this)} placeholder="Email" />
     <input className='input-field' onChange={this.onChange.bind(this)} placeholder="Password"/>
     <select className='show-on-large' onChange={this.onChangeUser.bind(this)}> 
     <option value="Recruiter" >Recruiter</option>
     <option value="JobSeeker">Job Seeker</option>
     </select>
     {this.state.user==='JobSeeker' ?       
     <div className="file-field input-field">
     <div className="btn">
     <span>Resume</span>
     <input type="file" onChange={this.onChange.bind(this)}/>
     </div>
     <div className="file-path-wrapper">
     <input className="file-path validate" type="text"/>
     </div>
     </div>
     :null}
     </form>
     <div className='row' style={{marginTop:'10px'}}>
     <a onClick={this.onClickSubmit.bind(this)}className="waves-effect waves-light btn right">Join</a>
     </div>
     </div>
     </Modal>
     <Modal
     isOpen={this.state.modalIsOpen2}
     onAfterOpen={this.afterOpenModal2}
     onRequestClose={this.closeModal2.bind(this)}
     style={customStyles}
     >
     <div className='container'>
     <label><h2 className="center-align">Sign In</h2></label>
     <form >
     <input className='input-field' onChange={this.onChange.bind(this)} placeholder="Email" />
     <input className='input-field' onChange={this.onChange.bind(this)} placeholder="Password"/>
     </form>
     <div className='row' style={{marginTop:'10px'}}>
     <a onClick={this.onClickConnect.bind(this)}className="waves-effect waves-light btn right">Connect</a>
     </div>
     </div>
     </Modal>
     <div className="navbar-fixed">
     <nav className="grey lighten-2" role="navigation">
     <div className="nav-wrapper container"><a id="logo-container" className="material-icons red-text darken-2">videocam</a>
     <ul className="right hide-on-med-and-down">
     <li><a onClick={this.openModal2.bind(this)} className="red-text darken-2">Sign in</a></li>
     </ul>
     <ul id="nav-mobile" className="side-nav">
     <li><a  className="red-text darken-2">Sign in</a></li>
     </ul>
     <a data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
     </div>
     </nav>
     </div>
   {/* End NavBar */}
 {/* Center */}
 <div className="section no-pad-bot" id="index-banner">
 <div className="container">
 <br /><br />
 <h1 className="header center red-text darken-2">rec<span className="header center orange-text text-lighten-3">Employ</span></h1>
 <div className="row center">
 <h5 className="header col s12 light">A job seeking platform that allows recruiters to view short videos of potential candidates before moving forward to next steps</h5>
 </div>
 <div className="row center">
 <a onClick={this.openModal1.bind(this)} id="download-button" className="btn-large waves-light red darken-2">Join The Team</a>
 </div>
 <br /><br />
 </div>
 </div>
{/* End Center */}
{/*   Cards Section   */}
<div className="container">
<div className="section">
<div className="row">
{/* Left Card */}        
<div className="col s12 m6">
<div className="card grey lighten-2">
<div className="card-content grey lighten-2">
<span className="card-title">Job Seeker</span>
<p>Find job postings, press record, answer questions, and land your dream job .</p>
</div>
<div className="card-action">
<a className="red-text darken-2 modal-trigger"><i className="material-icons">add_circle_outline</i></a>
</div>
</div>
</div>
{/* End Left Card */}
{/* Right Card */}
<div className="col s12 m6">
<div className="card grey lighten-2">
<div className="card-content">
<span className="card-title">Recruiter</span>
<p>Post job openings, review some videos, and employ your next best employee.</p>
</div>
<div className="card-action">
<a  className="red-text darken-2"><i className="material-icons">add_circle</i></a>
</div>
</div>
</div>
</div>
{/* End Left Card */}
</div>
<br /><br />
</div>
{/* End Cards Section */}
{/* Footer */}
<footer className="page-footer red darken-2">
<div className="container">
<div className="row">
<div className="col l6 s12">
<h5 className="white-text">Company Bio</h5>
<p className="grey-text text-lighten-4">We have created a platform that allows job seekers to respond via short video clips to job postings. Allowing recruiters to get a better sense of whether the candidate will be the right fit for the role before moving to next steps. We believe this eases the pain of sifting through hundreds of resumes while also allowing potential candidates to showcase their personality.</p>
</div>
<div className="col l3 s12">
<h5 className="white-text">Founders</h5>
<ul>
<li>M. Mohamed Jedeine</li>
<li>Josh Suhre</li>
<li>Vince White</li>
<li>Shamir Wehbe</li>
</ul>
</div>
<div className="col l3 s12">
<h5 className="white-text"><i className="fa fa-github-alt" aria-hidden="true" /></h5>
<ul>
<li><a className="white-text" href="https://github.com/MoudGW" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true" /></a></li>
<li><a className="white-text" href="https://github.com/UniversalStudentOfLife" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true" /></a></li>
<li><a className="white-text" href="https://github.com/vwhite324" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true" /></a></li>
<li><a className="white-text" href="https://github.com/wehbs" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true" /></a></li>
</ul>
</div>
</div>
</div>
<div className="footer-copyright">
<div className="container">
Made by <a className="orange-text text-lighten-3" href="#">The Triple C Team</a>
</div>
</div>
</footer>
</div>
)
}
}
export default home;