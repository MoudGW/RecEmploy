import React, { Component } from "react";
import SweetAlert from 'react-bootstrap-sweetalert';
let that;
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email:'',
      Passsword:'',
      alert: null
    }; 
    that=this;
   }
  deleteThisGoal() {
    const getAlert = () => (
     <SweetAlert
     title='Log in'
    onConfirm={this.onRecieveInput}
     >
    Log in
    <from>
     <input placeholder="Email"  id="Email"   onChange={(evt) => { that.setState({ Email: evt.target.value }); }} type="Email" className="validate"/>
     <input placeholder="Passsword" id="Passsword"  onChange={(evt) => { that.setState({ Passsword: evt.target.value }); }} type="Passsword" className="form-control"/>
    </from>
    </SweetAlert>
    );
    this.setState({
      alert: getAlert()
    });
    
   }
   onRecieveInput() {
    console.log(that.state.Email+"    "+that.state.Passsword);
    that.setState({
      alert: null
    });

  }

  render() {
    return (
          <div className='blue'>
          <a 
            onClick={() => this.deleteThisGoal()}
          >
          Sign In
        </a>
        {this.state.alert}
      </div>
    )
  }
}

export default Main;
