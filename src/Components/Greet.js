import React from 'react'

export default function Greet(props) {
  return (
    <div className='container card p-3 mt-2 register-container text-center'>
      <h3>Name:{props.name}</h3>
      <h3>You are Registered</h3>
      <h3>Verification sent to email: {props.email}</h3>
    </div>
  )
}
