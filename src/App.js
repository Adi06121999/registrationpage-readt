import './App.css';
import React, { Component } from 'react'
import Register from "./Components/Register"
import Greet from "./Components/Greet"
export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isRegistered: false,
       name:null,
       email:null,
       password:null,
       showpass: false,
    }
  }

registrationhandler = (event) => {
  // alert("hii")
  event.preventDefault();
  const name = event.target.uname.value;
  const email = event.target.email.value;
  const password = event.target.password.value;
  this.setState({name,email,password , isRegistered: true});


};

showPasswordHandler = () => {
  console.log(this.state);
  this.setState({showpass: !this.state.showpass}, () =>{
    console.log(this.state);
  } )
}


  render() {
    return (
      <div>
        {this.state.isRegistered ? <Greet name={this.state.name} email={this.state.email}/> : <Register submit={this.registrationhandler} showpass={this.state.showpass}
        click={this.showPasswordHandler}/>}
      </div>
    );
  }
}

export default App