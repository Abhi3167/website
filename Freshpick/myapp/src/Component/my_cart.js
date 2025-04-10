import React from 'react'
import { useSelector } from 'react-redux'
import { useState ,useEffect} from 'react'
import { mycartdataredux } from './store/CartSlice'
const Cart = () => {
      let [searchdata,setsearchdata]=useState([])
      let data=useSelector((state)=>state.cart)
   

        useEffect(()=>
        {
            setsearchdata(data)
         
        },[data])
  return <>
  { console.log(searchdata)}
  {
   
    searchdata.map((element)=>
    {
         return <div className='col-5 col-md-3 data-col p-2 '>
         <img src={element.image} className='mobile-img'></img>
         <div className='mo-name'>{element.name}</div>
         <div className='mobile-text'>
                   <div>
                     {element.name}
           .        </div>
                   <div>
                    price: {element.price}
                   </div>
                   <div>
                     weight: {element.weight}
                   </div>
                 </div>
         </div>
    })
  }
  </>
}

export default Cart;
