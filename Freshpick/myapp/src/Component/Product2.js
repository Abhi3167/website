import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { myproductdataredux } from './store/DetailSlics';

import './Product.css'
const Product2 = () => {

    const dispatch=useDispatch()
    const navigate=useNavigate()
  let [data1,setData]=useState([])

    const url = `https://dummyjson.com/products/category/groceries`;


     let urlData= async ()=>
     {
      

       let mydata= await fetch('https://dummyjson.com/products/category/groceries')
       let mydata2= await mydata.json()
       console.log(mydata2.products)
       setData(mydata2.products)

     }
     let images=
     {
         chicken:'https://img.freepik.com/free-psd/crispy-fried-chicken-bucket-delicious-treat_191095-86006.jpg?ga=GA1.1.875927859.1742633235&semt=ais_hybrid'
     }

      let getdata=(element)=>
      {
        dispatch(myproductdataredux(element))
        console.log(element)
        navigate('/detail')
      }
  
   useEffect(()=>
{
    
   urlData()
},[])

  return<>
    <div className='container'>
    <div className='row'>

        {
            data1.map((element)=>
            {
              return<>
                <div className='col-md-2 col-xs-2  col-3 p-2 product-card'  onClick={()=>{getdata(element)}}>
                    {/* {
                        if(element.id==19)
                        {
                            <div><img src={images['chicken']} className='product-image'></img></div>
                        }
                        else
                        {
                            <div><img src={element.thumbnail} className='product-image'></img></div>
                    } */}
                    {element.id==19? <div><img src={images['chicken']} className='product-image'></img></div>:<div className='text-center'><img src={element.thumbnail} className='product-image'></img></div>}
                  {/* } */}
                    
                     <div className='product-text text-center'>{element.title}</div>
                    </div>
              </>
            })
        }
        </div>
        </div>
  </>
}

export default Product2
