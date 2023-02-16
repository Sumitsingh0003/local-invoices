import React from 'react';
import { useState } from 'react';

function Login() {

  const [name, setName] = useState("");
  const [sbmtdata, setSbmtdata] = useState("");

  const inputEvent = (event) => {
    setName(event.target.value);  
  };
  
  
  const submitValue = (event) => {
    setSbmtdata(name);
  }

  return (
    <>
        <h1>Login Page </h1> 

        <p>Live Changes {name}</p>

        <div className='form'>
          <input type="text" placeholder='Enter Your Name' onChange={inputEvent} value={name} />
          <button onClick={submitValue}> Submit Dat </button>
        </div>

        <p>Submit Changes {sbmtdata}</p>
    </>
  )
}

export default Login
