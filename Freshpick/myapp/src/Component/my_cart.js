import React from 'react'
import { useSelector } from 'react-redux'
import { useState ,useEffect} from 'react'
import { mycartdataredux } from './store/CartSlice'
import cart from './cart.png'
import './my_cart.css'
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
   
   searchdata.length>=1 ? searchdata.map((element)=>
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
    }): <> <div >
           <div className='cart my-3'>
            <img src={cart} className='cart-img '></img>
            <div className='text-center fs-5'> Your cart is empty !!!</div>
           </div>
      </div></>
  }
  </>
}

export default Cart;
