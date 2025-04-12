import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
const Private = () => {
    let logindata=JSON.parse(localStorage.getItem('login'))
  return logindata ? <Outlet></Outlet> : <Navigate to='/signup'/>;
}

export default Private

{
    // if(a>10)
    // {
    //     cout<<"1"
    // }
    // else{
    //        cout<<" 2"
    // } 

    // a>10 ? cout<<"10" : cout<<"2";
}