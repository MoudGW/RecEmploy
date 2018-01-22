import React from "react";

const Cards = props => (

<div className="container">
<div className="section">
  <div className="row">  
    <div className="col s12 m6">
      <div className="card grey lighten-2">
        <div className="card-content grey lighten-2">
          <span className="card-title">Job Seeker</span>
          <p>Find job postings, press record, answer questions, and land your dream job .</p>
        </div>
        <div className="card-action">
          <a href="#modal1" className="red-text darken-2 modal-trigger"><i className="material-icons">add_circle_outline</i></a>
        </div>
      </div>
    </div>
    <div className="col s12 m6">
      <div className="card grey lighten-2">
        <div className="card-content">
          <span className="card-title">Recruiter</span>
          <p>Post job openings, review some videos, and employ your next best employee.</p>
        </div>
        <div className="card-action">
          <a href="#modal2" className="red-text darken-2 modal-trigger"><i className="material-icons">add_circle</i></a>
        </div>
      </div>
    </div>
  </div>
</div>
<br />
<br />
</div>

);


export default Cards;