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
componentWillMount() {
           let id= sessionStorage.getItem('_id');
           let user=sessionStorage.getItem('type'); 
            if(!id || user!=='Recruiter')
           {
            this.props.history.push('/')
           }
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
  setTimeout(()=>
  API.findbyrecruiter(id).then((res) =>{
  this.setState({jobs:res.data})
  }),1000);
  }
  getjobslist= ()=>{
      return(
      this.state.jobs.map(job =>
      <li className="collection-item" style={{padding:'20px'}} key={job._id}> 
     <div  className='row'><blockquote style={{fontSize:'20px'}} >Title : {job.title}</blockquote></div>
      <ul className="collection z-depth-3">
       {job.applications.length ?
           job.applications.map(app =>
            <li className="collection-item" style={{padding:'20px'}} key={app._id}> 
            <div style={{padding:'7px'}}><div onClick={()=>{this.props.history.push("/user/"+app.Applicant_id._id)}} className='chip'>
            <img src={!app.Applicant_id.photo ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX7jsQsu-GP0SV74mjcvgACwxRZdXyv1z7Sut_Cwe-vBgn9SgV" : app.Applicant_id.photo} />
            {app.Applicant_id.First+' '+app.Applicant_id.Last}</div></div>
             <video width="400" controls>
             <source src={app.URL_Video} type="video/mp4"/>
             </video>
             <a className="waves-light row center" href={app.Applicant_id.resume} download='resume.pdf'><i className="material-icons right">save</i>Resume</a>
            </li>)
          :<div style={{padding:'20px'}} className='center result'>No applications found</div>}
       </ul>
      </li>
     )
    )
  }
   
render() {
  return (
    <div>  
         {/* start NavBar */}
     <div className="navbar-fixed">
     <nav className="grey lighten-2">
     <div className="nav-wrapper container">
     <span className='logo'>RecEmploy</span>
     <ul className="right hide-on-med-and-down">
      <li>
     <a onClick={()=>{this.props.history.push('/user/'+id)}} className="sign bleu darken-2">Profile</a>
     </li>
     <li>
     <a  className="sign red-text">Sign Out</a>
     </li>
     </ul>
     <ul className="side-nav">
     <li>
     <a onClick={()=>{this.props.history.push('/user/'+id)}} className="sign bleu darken-2">Profile</a>
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
     {/* Center */}
        <div className="container" id='index-recruiter'>
        <div className="row">
        <div className="col s5 collection z-depth-5 job" style={{marginRight:'20px'}}>
        <div className='center-align' style={{marginTop:'10px'}}>
        <label ><h1 className='chip' style={{fontSize:'20px'}}>Add A Job</h1></label>
        </div>
        <form>
        <div className="row form">
        <div className="input-field form col s12">
        <input type="text" onChange={this.onChange.bind(this)} placeholder='title'/>
    </div>
    </div>
    <div className="row form">
    <div className="input-field form col s12">
    <input  type="text"  onChange={this.onChange.bind(this)}  placeholder='location'/>
    </div>
    </div>
    <div className="row form">
    <div className="input-field form col s12">
    <input type="text"  onChange={this.onChange.bind(this)} placeholder='classification'/>
    </div>
    </div>
    <div className="row form">
    <div className="input-field form col s12">
    <input type="text"  onChange={this.onChange.bind(this)} placeholder='type'/>
    </div>
    </div>
    <div className="row form">
    <div className="input-field  form col s12">
    <textarea placeholder="description"  onChange={this.onChange.bind(this)} className="materialize-textarea"></textarea>
    </div>
    </div>
    </form>
     <a style={{margin:'30px'}} onClick={this.onClick.bind(this)} className="btn waves-effect right waves-light" type="submit">Submit
    <i className="material-icons right">send</i>
    </a>
    </div>
    <div className="col s6 collection z-depth-1 job">
  <div className='center-align' style={{marginTop:'10px'}}>
        <label ><h1 className='chip' style={{fontSize:'20px'}}>Jobs</h1></label>
        </div>
    <ul className="collection z-depth-2">
      {this.state.jobs.length ? this.getjobslist() : <div className='center-align result'>No jobs found</div>}
    </ul>
    </div>
    </div>
    </div>
    </div>

    )
  }
}

export default Rec_home;