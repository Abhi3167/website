import React from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let navigate=useNavigate()
  return <>
  
 
        <div className="row page-row">
            <div className="col-md-12 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
                  <div className='card'>
                  <div className='heading' >Login Form</div>
                  <div className='nav-button'>
                    <button className='heading-btn bg-warning' >Login</button>
                    <button className='heading-btn' onClick={()=>{navigate('/signup')}}>Sign Up</button>
                  </div>
                  <div className='input-fields'>
                    <input type="text" placeholder='Email' className='input'/>
                    <input type="password" placeholder='Password' className='input'/>
                  </div>
                  <div className='page-button'>
                    <button className='cl-btn' onClick={()=>{navigate('/home')}}>Login</button>
                  </div>
                <div className='page-text'>
                    <div className='n-text'>Don't have an account?</div>
                    <div className='signup-text'  onClick={()=>{navigate('/signup')}}>Click to signup</div>
                </div>
                  </div>
            </div>
        </div>
      
  </>
}

export default Login
