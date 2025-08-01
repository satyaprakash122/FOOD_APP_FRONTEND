import React, { useState } from 'react'
import './LoginPopup.css'
import '../../assets/assets'
import { assets } from '../../assets/assets';
const LoginPopup = ({setShowLogin}) => {

  const [currState, setCurrstate] = useState("Login");
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
          {currState==='Login'?<></>:
          <input type="text" placeholder='Your name' required />}
          <input type="email" placeholder='Your email' required />
          <input type="password" placeholder='password' required />
        </div>
        <button>{currState==='Sign up'?"Create account":"Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
        {currState==='Login'?<p>Create a new account? <span onClick={()=>setCurrstate('Sign up')}>Click here</span></p>
        :<p>Already have an account? <span onClick={()=>setCurrstate('Login')}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
