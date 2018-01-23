import React, { Component } from "react";
import API from '../API/API';
class Rec_home extends Component {
state={
  title:'',
  location:'',
  classification:'',
  type:'',
  description:'',
  Question1:'',
  Question2:'',
  Question3:''
}
onChange= function(event) {
  this.setState({[event.target.placeholder]: event.target.value});
}
onClick= function() {
  let data={
    'title':this.state.title,
    'locations':this.state.location,
    'classification':this.state.classification,
    'type':this.state.type,
    'description':this.state.description,
    'question':[this.state.Question1,this.state.Question2,this.state.Question3]
 };
API.addjob(data).then(
   console.log(data)
  );
}
render() {
  return (
    <div>  
    <nav>
    <div className="nav-wrapper blue">
    <a className="brand-logo text-white">RecEmploy<i className="large material-icons">insert_chart</i></a>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li>
    <a href="#">Profile</a>
    </li>
    <li className='red'><a href="#">Sign Out</a></li>
    </ul>
    </div>
    </nav>
    <div className="container">
    <div className="row">
    <div className="col s6">
    <div className='center-align' style={{marginTop:'50px'}}>
    <label><h1>Add A Job</h1></label>
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
    </div>
    <div className="col s6">
    <div className='center-align' style={{marginTop:'50px'}}>
    <label><h1>Jobs</h1></label>
    </div>
    </div>
    </div>
    </div>
    <div className='center-align' style={{padding:'10px'}}>
    <label><h3>Questions</h3></label>
    </div>
    <div className="container">
    <div className="row">
    <div className="input-field col s4">
    <input type="text"  onChange={this.onChange.bind(this)} placeholder='Question1'/>
    </div>
    <div className="input-field col s4">
    <input type="text"  onChange={this.onChange.bind(this)} placeholder='Question2'/>
    </div>
    <div className="input-field col s4">
    <input type="text"  onChange={this.onChange.bind(this)} placeholder='Question3'/>
    </div>
    </div>
    </div>
    <div className="container">
    <button style={{margin:'30px'}} onClick={this.onClick.bind(this)} className="btn waves-effect right waves-light" type="submit" name="action">Submit
    <i className="material-icons right">send</i>
    </button>
    </div>
    </div>
    )
  }
}

export default Rec_home;