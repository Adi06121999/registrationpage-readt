import React from 'react'
import Styled from "styled-components"
export default function Register(props) {
  // let btnstyle;
  // btnstyle = {
  //   backgroundColor: "green",
  //   color: "white",
  // };
  let btntext, passBoxType;
  let btnclasses = ["btn","m-1"];
  if(props.showpass === true){

    // btnstyle.backgroundColor = "red";
    btntext = "Hide Password";
    passBoxType = "text";
    btnclasses.push("btn-danger");
  }else{
    btntext = "Show Password";
    passBoxType = "password";
    btnclasses.push("btn-success");
  } 
  // console.log(btnclasses);
  // console.log(btnclasses.join(" "));
//internal css above
//showpass is false by default and the above logi works dynamically
const StyledButton =  Styled.button`
display:block;
padding: 10px 5px;
background-color: orange;
border:none;
color: white;
width:100%;
margin: 5px;

`
// ; case sensitive

  return (
    <div className='container card p-3 mt-2 register-container'>
        <h1 className='text-center'>Registration Form</h1>
        <form onSubmit={props.submit}>
            <div className='form-group'>
            <label htmlFor='name'>Name</label>
            <input type="text" name="uname" required className='form-control'></input>
            </div>
            <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input type="text" name="email" required className='form-control'></input>
            </div>
            <div className='form-group'>
            <label htmlFor='password'>Password</label>
            <input type={passBoxType} name="password" required className='form-control'></input>
            </div>
            <button type='submit' className='btn btn-primary m-1'>Register</button>
            <button type='button' className={(btnclasses.join(" "))} onClick={props.click}>{btntext}</button>
            <StyledButton type='button'>Login</StyledButton>
            <StyledButton type='button'>T&C</StyledButton>
        </form>
    </div>
  )
}
//classes ka array,push and join
//converting array into string using join
//breaking array and concatinating it again

//p for padding  mt for margin