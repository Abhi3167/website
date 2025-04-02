import React from 'react'
import './Sign_up.css'
import { useNavigate } from 'react-router-dom'
const Sign_up = () => {
       let navigate=useNavigate()
  return (
    <div>
      
  
        <div className="row page-row">
            <div className="col-md-6 col-sm-12 col-xs-12 d-flex justify-content-center align-items-center">
                  <div className='card-signup'>
                  <div className='heading' >Signup Form</div>
                  <div className='nav-button'>
                    <button className='heading-btn ' onClick={()=>{navigate('/login')}}>Login</button>
                    <button className='heading-btn bg-warning'>Sign Up</button>
                  </div>
                  <div className='input-fields'>
                    <input type="text" placeholder='Email' className='input'/>
                    <input type="password" placeholder='Password' className='input'/>
                    <input type="password" placeholder='Confirm Password' className='input'/>
                    <input type="text" placeholder='Name' className='input'/>
                  </div>
                  <div className='page-button'>
                    <button className='cl-btn' onClick={()=>{navigate('/login')}}>Signup</button>
                  </div>
                {/* <div className='page-text'>
                    <div className='n-text'>Don't have an account?</div>
                    <div className='signup-text' >Click to signup</div>
                </div> */}
                  </div>
            </div>
        </div>
    


    </div>
  )
}

export default Sign_up
