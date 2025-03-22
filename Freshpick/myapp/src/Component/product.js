import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import './Product.css'
const Product = () => {

  let [data1,setData]=useState([])

    const url = `https://api.escuelajs.co/api/v1/products`;


     let urlData=async ()=>
     {
         let fetchdata= await fetch(url) // promise
        //  console.log(fetchdata)
                   let data =await fetchdata.json()
                //    console.log(data)

                   setData(data)
     }
  

   urlData()

  return<>
    <div className='container'>
    <div className='row'>

        {
            data1.map((element)=>
            {
              return<>
                <div className='col-md-2 col-xs-2 sm-2'>
                     <div><img src={element.images[0]} className='product-image'></img></div>
                     <div>{element.slug}</div>
                    </div>
              </>
            })
        }
        </div>
        </div>
  </>
}

export default Product
