import React from "react";

const Footer = props => (

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
          <h5 className="white-text"><i className="fa fa-github-alt" aria-hidden="true"></i></h5>
          <ul>
            <li><a className="white-text" href="https://github.com/MoudGW" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></a></li>
            <li><a className="white-text" href="https://github.com/UniversalStudentOfLife" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></a></li>
            <li><a className="white-text" href="https://github.com/vwhite324" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></a></li>
            <li><a className="white-text" href="https://github.com/wehbs" target="_blank"><i className="fa fa-arrow-circle-o-left" aria-hidden="true"></i></a></li>
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

);


export default Footer;