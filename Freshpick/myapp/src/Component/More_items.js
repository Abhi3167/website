import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate ,useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { myproductdataredux } from './store/DetailSlics';
import './More_items.css';
const More_items = () => {
    let {id}=useParams()
  const dispatch=useDispatch()
    const navigate=useNavigate()
     let [data1,setData]=useState([])
    let [moreItems,setMoreItems]=useState([])
        const url = `https://dummyjson.com/products/category/groceries`;
    
        let images=
        {
            chicken:'https://img.freepik.com/free-psd/crispy-fried-chicken-bucket-delicious-treat_191095-86006.jpg?ga=GA1.1.875927859.1742633235&semt=ais_hybrid'
        }
         let urlData= async ()=>
         {
          
    
           let mydata= await fetch('https://dummyjson.com/products/category/groceries')
           let mydata2= await mydata.json()
           console.log("more",mydata2.products)
           setData(mydata2.products)
         let n=4
         console.log("data1",data1)
         let shuffled = mydata2.products.sort(() => 0.5 - Math.random());
         setMoreItems(shuffled.slice(0, n))
         console.log("moreItems",moreItems)
        console.log('sdfgh')
         }
        
           
        
        
        let getdata=(element)=>
            {
              dispatch(myproductdataredux(element))
              console.log(element)
              navigate(`/detaill/${element.id}`)
            }

            useEffect(()=>
         {
             
            urlData()
            setData(null)
           
         },[id])
    
        
       


  return <>

<div className='container'>
    <div className='row d-flex justify-content-evenly flex-row'>
       
    <h3 className="mt-5 text-center">YOU MIGHT ALSO LIKE</h3>
         
        {
            moreItems.map((element)=>
            {
              return<>
                <div className='col-md-2 col-xs-2  col-3 p-2 product-card2'  onClick={()=>{getdata(element)}}>
                    {/* {
                        if(element.id==19)
                        {
                            <div><img src={images['chicken']} className='product-image'></img></div>
                        }
                        else
                        {
                            <div><img src={element.thumbnail} className='product-image'></img></div>
                    } */}
                    {element.id==19? <div><img src={images['chicken']} className='product-image1'></img></div>:<div className='text-center bold'><img src={element.thumbnail} className='product-image1'></img></div>}
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

export default More_items
