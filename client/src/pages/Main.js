import React, { Component } from "react";
import API from '../API/API';
class Main extends Component {
    state = {
      search:'',
      jobs:[],
      showresult:false
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
    displayresult=() => {
    return(
    this.state.jobs.map(job =>
        <li className="collection-item" style={{padding:'50px',borderBottom:'1px solid gray'}} key={job._id}>  
        <span>
          <h3>{job.title}</h3>
        </span>
        <br></br>
        <strong>Description:</strong>
        <p>{job.description}</p>
        <span><strong>Type: </strong>{job.type}</span>
        <p><strong>Locations: </strong>{job.locations}</p>
        <p><strong>classification: </strong>{job.classification}</p>
         <div className='right'>
         <button className='waves-effect waves-light btn'>apply</button>
         </div>
         </li>
        )
     )
    }
      render() {
        return (
        <div>  
        <nav>
        <div className="nav-wrapper">
        <a className="brand-logo">RecEmploy<i className="large material-icons">insert_chart</i></a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="#">Profile</a></li>
        <li className='blue'><a href="#">Sign Out</a></li>
        </ul>
        </div>
        </nav>
        <div className="container bar">
        <div className="row">
        <div className="col s4 offset-s4 pull-s2 center">
        <label><h1>Search for Jobs</h1></label>
        <div className="input-field center-align" onChange={this.onChange.bind(this)}>
        <input className="center-align" id="search" type="search"/>
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

    export default Main;