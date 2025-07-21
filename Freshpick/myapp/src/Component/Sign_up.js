import React, { useState } from 'react'
import './Sign_up.css'
import { useNavigate } from 'react-router-dom'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Sign_up = () => {
       let navigate=useNavigate()
       let [show, setShow] = useState(false);
      let [su,setsu]=useState(false)
       let [error,seterror]=useState()
       let [errHeader,seterrHeader]=useState()
       let [userdata,setuserdata]=useState({
        name:"",
        email:"",
        password:"",
        cmfpassword:""

       })
       let getDetail=(e)=>
       {
             setuserdata({...userdata,[e.target.name]:e.target.value})
       }
       let getSignupData=async(e)=>
       {
                  e.preventDefault()
                  console.log(userdata)

                  let {name,email,password,cmfpassword}=userdata
                  if(name==="" || email==="" || password==="" || cmfpassword==="")
                    {
                      seterrHeader("Error in All fields")
                      seterror("All fields are required")
                      setShow(true)
                      setsu(false)
                      return
                    }
                  if(password!==cmfpassword)
                  {
                    seterrHeader("Error in Password")
                    seterror("Password not matched")
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
                  if(password.length>=8 && email.includes('@') && password==cmfpassword)
                  {
                    console.log("success")
                    seterrHeader("Success")
                    seterror("Signup successfully")
                    setShow(true)
                    setsu(true)
                   
                   await fetch('  http://192.168.18.59:3000/signup', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify({
                        name:name,
                        email:email,
                        password:password,
                      }),
                    })
                    localStorage.setItem('auth', JSON.stringify({name:name,email:email,password:password}))
                    navigate('/login')
                 
                  }

                 
       }
  return <>
    
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
                  <input type="text"  name="name" onChange={getDetail} placeholder='Name' className='input'/>
                    <input type="text" name="email" onChange={getDetail} placeholder='Email' className='input'/>

                    <input type="password" name="password" onChange={getDetail} placeholder='Password' className='input'/>
                    <input type="password"  name="cmfpassword" onChange={getDetail} placeholder='Confirm Password' className='input'/>
                 
                  </div>
                  <div className='page-button'>
                    <button className='cl-btn'  onClick={getSignupData}>Signup</button>
                  </div>
                {/* <div className='page-text'>
                    <div className='n-text'>Don't have an account?</div>
                    <div className='signup-text' >Click to signup</div>
                </div> */}
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

export default Sign_up
