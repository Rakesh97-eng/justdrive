import React from 'react';
import bmw from "../assets/bmw.png";
import "./style.css";
import { NavLink } from 'react-router-dom';

const Login=()=> {
  return (<>
    <div className='login-main-container'>
      <div className='car-container'>
      <img  className="login-car" src={bmw} alt="BMW"/>
      <p className='car-content'>CAR RENTAL SERVICE</p>
      </div>
      <div className='login-container'>
        <form className='form'>
          <input type='number' placeholder='Phone Number' className='input1'/>
          <input type="number" placeholder= "OTP" className='input2'/>

          <NavLink to ="/dashboard"><button className='login'>LOGIN</button></NavLink>
          
          <p className='no'>Dont have an account? <strong>Sign up</strong></p>
        </form>
      </div>

    </div>
    </> )
}

export default Login;