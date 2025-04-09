import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Login = () => {
    let [show, setShow] = useState(false);
        let [su,setsu]=useState(false)
         let [error,seterror]=useState()
         let [errHeader,seterrHeader]=useState()
         let navigate=useNavigate()
    let [userdata,setuserdata]=useState({
          email:"",
          password:"",
         })
         let getDetail=(e)=>
          {
                setuserdata({...userdata,[e.target.name]:e.target.value})
          }
          let getLoginData=async(e)=>{
            e.preventDefault()
            console.log(userdata)

            let {email,password}=userdata
            if(email==="" || password==="")
              {
                seterrHeader("Error in All fields")
                seterror("All fields are required")
                setShow(true)
                setsu(false)
                return
              }
              if(password.length<8)
                {
                  seterrHeader("Error in Password")
                  seterror("Password should be 8 characters long")
                      setShow(true)
                      setsu(false)
                      return
                }
                if(!email.includes('@') || !email.includes('.'))
                {
                  seterrHeader("Error in Email")
                  seterror("Email is not valid")
                  setsu(false)
                      setShow(true)
                      return
                }
                if(!email.includes('.com'))
                {
                  seterrHeader("Error in Email")
                  seterror("Email is not valid")
                  setsu(false)
                      setShow(true)
                      return
                }
                if(password.length>=8 && email.includes('@') )
                  {
                    console.log("success")
                   
                   
                  
                let apidata= await fetch('http://192.168.18.59:8088/login', {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({

                      email:email,
                      password:password,
                    }),
                  })
                  let apires=await apidata.json()
                  console.log(apires)
                  if(apires.success===false)
                  {
                    seterrHeader("Error in Login")
                    seterror(apires.message)
                    setsu(false)
                    setShow(true)
                    return
                  }
                  if(apires.success===true)
                    {
                      seterrHeader("Success")
                      seterror("Signup successfully")
                      setShow(true)
                      setsu(true)
                      navigate('/home')
                    }
                }
          }
 
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
                    <input onChange={getDetail} name='email' type="text" placeholder='Email' className='input'/>
                    <input onChange={getDetail} name='password' type="password" placeholder='Password' className='input'/>
                  </div>
                  <div className='page-button'>
                    <button className='cl-btn' onClick={getLoginData}>Login</button>
                  </div>
                <div className='page-text'>
                    <div className='n-text'>Don't have an account?</div>
                    <div className='signup-text'  onClick={()=>{navigate('/signup')}}>Click to signup</div>
                </div>
                  </div>
            </div>
        </div>
        
      <ToastContainer  aria-live="polite" 
      aria-atomic="true" position="bottom-end" className="p-3 " style={{ zIndex: 1 }}>
     {
      show &&  <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header className={su ? 'bg-success' : 'bg-danger'}>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-"
            alt=""
          />
          <strong className="me-auto">{errHeader}</strong>
          <small className="text-muted">just now</small>
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
     }


    </ToastContainer>
      
  </>
}

export default Login
