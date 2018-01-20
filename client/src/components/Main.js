import React, { Component } from "react";
import API from '../API/API'
class Main extends Component {
     state = {
      search: '',
      jobs:[]
    }
    componentDidMount() {
        API.getData().then((res) => {
          this.setState({jobs:res.data.jobs});  
          console.log(this.state.jobs);
        });

    }
    onChange= function(event) {
      this.setState({search: event.target.value});
    }
    onClick= function(event) {

    }
    handleApply= function(){

    }
    displayresult=function(){
     return(
    this.state.jobs.map(job =>
        <li className="collection-item" key={job._id}>  
        <span>
          <h3>{job.title}</h3>
        </span>
        <br></br>
        <strong>Description:</strong>
        <p>{job.description}</p>
        <span><strong>Type: </strong>{job.type}</span>
        <p><strong>Locations: </strong>{job.locations}</p>
        <p><strong>classification: </strong>{job.classification}</p>
         <div><button>apply</button></div>
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
        <div className="input-field center" onChange={this.onChange.bind(this)}>
        <input id="search" type="search"/>
        <i className="material-icons Medium">search</i> 
        </div>
        </div>
        </div>
       <ul className="collection">
        {this.displayresult()}
        </ul>
        </div>
        </div>
        )
      }
    }

    export default Main;