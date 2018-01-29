import React, { Component } from "react";
import API from '../API/API';
let id=sessionStorage.getItem("_id");
class Rec_home extends Component {

state={
  title:'',
  location:'',
  classification:'',
  type:'',
  description:'',
  recruiter:'',
  jobs:[]
}
componentDidMount(){
    let id=sessionStorage.getItem("_id")
    this.setState({recruiter:id})
    API.findbyrecruiter(id).then((res) =>{
    this.setState({jobs:res.data})
   }
  )
}
onChange= function(event) {
  this.setState({[event.target.placeholder]: event.target.value});
}
onClick= function(event) {
 event.preventDefault();
  let data={
    'title':this.state.title,
    'locations':this.state.location,
    'classification':this.state.classification,
    'type':this.state.type,
    'description':this.state.description,
    'Recruiter':sessionStorage.getItem("_id")
  }
  API.addjob(data).then();
  API.findbyrecruiter(id).then((res) =>{
  this.setState({jobs:res.data})
  })
  }
  getjobslist= ()=>{
      return(
      this.state.jobs.map(job =>
      <li className="collection-item" style={{padding:'20px'}} key={job._id}> 
      <span><strong>Title :</strong>{job.title}</span>
      <ul className="collection">
       {job.applications.length ?
           job.applications.map(app =>
            <li className="collection-item" style={{padding:'20px'}} key={app._id}> 
            <div><strong>Name :</strong>{app.Applicant_id.First+' '+app.Applicant_id.Last}</div>
             <p>Resume<a href={app.Applicant_id.resume} download> <i className="material-icons">cloud_download</i></a></p>
             <video width="400" controls>
             <source src={app.URL_Video} type="video/mp4"/>
              Your browser does not support HTML5 video.
             </video>
            </li>)
       :<div>no applications found</div>}
       </ul>
      </li>
     )
    )
  }
   
render() {
  return (
    <div>  
        <div className="navbar-fixed">
        <nav className="grey lighten-2">
        <div className="nav-wrapper container">
        <a className="brand-logo">RecEmploy<i className="large material-icons">insert_chart</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a className='blue-text'>Profile</a></li>
        <li ><a className='red-text'>Sign Out</a></li>
        </ul>
        </div>
        </nav>
        </div>
        <div className="container">
        <div className="row">
        <div className="col s6">
        <div className='center-align' style={{marginTop:'50px'}}>
        <label><h4>Add A Job</h4></label>
        </div>
        <form>
        <div className="row">
        <div className="input-field col s12">
        <input type="text" onChange={this.onChange.bind(this)} placeholder='title'/>
    </div>
    </div>
    <div className="row">
    <div className="input-field col s12">
    <input  type="text"  onChange={this.onChange.bind(this)}  placeholder='location'/>
    </div>
    </div>
    <div className="row">
    <div className="input-field col s12">
    <input type="text"  onChange={this.onChange.bind(this)} placeholder='classification'/>
    </div>
    </div>
    <div className="row">
    <div className="input-field col s12">
    <input type="text"  onChange={this.onChange.bind(this)} placeholder='type'/>
    </div>
    </div>
    <div className="row">
    <div className="input-field col s12">
    <textarea placeholder="description"  onChange={this.onChange.bind(this)} className="materialize-textarea"></textarea>
    </div>
    </div>
    </form>
     <a style={{margin:'30px'}} onClick={this.onClick.bind(this)} className="btn waves-effect right waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
    </a>
    </div>
    <div className="col s6">
    <div className='center-align' style={{marginTop:'50px'}}>
    <label><h4>Jobs</h4></label>
    </div>
    <ul className="collection">
      {this.state.jobs.length ? this.getjobslist() : <div className='center-align'>no jobs found</div>}
    </ul>
    </div>
    </div>
    </div>
    </div>

    )
  }
}

export default Rec_home;