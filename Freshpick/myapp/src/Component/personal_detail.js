import React from 'react'
import './personal_detail.css'
import { useNavigate } from 'react-router-dom'

const Personal_detail = () => {
    let userdata= JSON.parse(localStorage.getItem('login'))
    console.log(userdata)
    let navigate=useNavigate()
    let getLogout=()=>{
      localStorage.removeItem('login')
      navigate('/login')
    }
  return<>
  
  <div className="container personal-cont personal-name personal-email">
    <div className="row personal-row" >
            <div className='col-md-6 col-12 personal-col' >
                <div className='personal-body'>
                    <h2>Personal Details</h2>
                    <div><span >_id : </span><span>{userdata._id}</span></div>
                    <div><span>Name : </span> <span>{userdata.name}</span></div>
                    <div><span>Email : </span> <span>{userdata.email}</span></div>
                    <div><span>sign out : </span><span onClick={getLogout}><button>Sign_out</button></span></div>
                    
                </div>

            </div>
    </div>
  </div>
  <div className="container b">
    <div className="row personal-row" >
            <div className='col-md-6 col-12 personal-col' >
                <div className='personal-body py-3'>
                    <h2 className='p-3'>Personal Details</h2>
                    <div><span className='p-head py-2' >User Id: </span><span>{userdata._id}</span></div>
                    <div><span className='p-head py-2'>Name : </span> <span>{userdata.name}</span></div>
                    <div><span className='p-head py-2'>Email : </span> <span>{userdata.email}</span></div>
                    <div className='py-4 px-2'><span onClick={getLogout}><button className='s-btn'>Sign_out</button></span></div>
                    
                </div>

            </div>
    </div>
  </div>
  </>
}

export default Personal_detail
