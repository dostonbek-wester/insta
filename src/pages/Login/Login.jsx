import React from 'react'
import img1 from "./../../assets/insta2.png"
import img2 from "./../../assets/instagram.png"
import google from "./../../assets/google.png"
import facebook from "./../../assets/facebbok.png"
import microsoft from "./../../assets/microsoft.png"
import logo from "./../../assets/insta-logo.png"
import { Input, TextField, ThemeProvider } from '@mui/material'
import { InputOutlined } from '@mui/icons-material'
import "./style.css"
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  function HandleClick(params) {
    navigate('/home')
  }
  return (
    <div className='login-container'>
      <div className="box">
        <div className="left">
          <img src={img1} />
          <img src={img2} />
        </div>
        <div className="right">
          <div className="big-box">
            <img src={logo} className='i' />
            <div className="inputs">
              <input type="text" placeholder='Username, Phone or Email' className='input' />   


            <input type="password" placeholder='Password' className='input' />
              <button onClick={HandleClick} className='get-button'>Get</button>



            </div>
            <div className='rh'><div></div> <p>OR</p> <div></div></div>
            <div className="aahi">
              <img src={facebook}  />
              <p>Open Facebook</p>
            </div>
            <p className='reset'>Reset Password?</p>

          </div>
          <div className="boxda">
            <p>You have not a account? <span>Create</span></p>
          </div>
          <p className='d'>Download App</p>
          <div className='prog'>
            <img src={google} alt="" />
            <img src={microsoft} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login