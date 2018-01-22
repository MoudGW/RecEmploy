import React from "react";

const Modals = props => (
<div>
    <div id="modal1" className="modal">
    <div className="modal-content">
      <h4>Job Seeker</h4>
      <div className="row">
          <div className="input-field col s12">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>
        </div>
    </div>
    <div className="modal-footer">
      <a href="#!" className="modal-action waves-effect waves-green btn-flat">Sign Up</a>
    </div>
  </div>

<div id="modal2" className="modal">
  <div className="modal-content">
    <h4>Recruiter</h4>
    <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate" />
          <label for="email">Email</label>
        </div>
      </div>
  </div>
  <div className="modal-footer">
    <a href="#!" className="modal-action waves-effect waves-green btn-flat">Sign Up</a>
  </div>
</div>
</div>

);


export default Modals;