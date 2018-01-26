import React, { Component } from "react";
import API from '../API/API';
class Rec_home extends Component {
state={
  title:'',
  location:'',
  classification:'',
  type:'',
  description:'',
  Recruiter:'',
  jobs:[],
  applications:[]
}
componentWillMount(){
    let id=sessionStorage.getItem("_id");
    this.setState({Recruiter:id})
    API.findbyrecruiter(id).then((res) =>{
      console.log(id)
      console.log(res)
    this.setState({jobs:res.data})
  })
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
 };
API.addjob(data).then(
   console.log(data)
  );
 }

getappli= ()=>{
     return(
     this.state.jobs.map(job =>
      <li className="collection-item" key={job._id}>  
      {API.getAplsbyapplicant(job._id).then((res) =>{this.setState({applications:res.data})})}
      <span><h3>{job.title}</h3></span>
      <br></br>
           <ul>
             { this.state.applications.map(app =>{
              <li key={job._id}>
              <span><h3>{app.jobsid}</h3></span>
              <span><h3>{app.Applicant_id}</h3></span>
              <span><h3>{app.URL_Video}</h3></span>
              </li>
             } )} 
           </ul>
      </li>
   ))
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
    <ul>
        {this.state.jobs.length ? this.state.getappli() : <div>no jobs found</div>}
    </ul>
    </div>
    </div>
    </div>
    </div>
  
    </div>
    )
  }
}

export default Rec_home;