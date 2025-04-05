import React from 'react'
import { groceryArr, juice_data } from './colddrink'
import { useState } from 'react'
import './colddrink.css'
const Colddrink = () => {
  
  let [category ,setcategory]=useState("")
  let [colorcheck, setcolorchek]=useState(null)

  let catrgory_list=[
        { a:"", name:" All Data"},
        { a: "soft",name:"Soft Drinks"},
        { a:"juice",name:"Juice"},
        {a:"soda",name:"Soda"},
         {a:"energyDrink",name:"Energy Drink"},
         {a:"herbalDrink",name:"Herbal Drink"},
         {a:"water",name:"Water"},
]
let getdata=(element) =>
  {
    setcategory(element.a)
         setcolorchek(element.name)
  }

  return <>
    <div className='row mobliee-c'>
      <div className='col-3 col-md-2 d-flex justify-content-center mt-5 pos12'>
      {/* <div className='catrgory-items'>

  <div  onClick={()=>{setcategory("")}}>All Data</div>
  <div  onClick={()=>{setcategory("soaps")}}>Soaps</div>
  <div  onClick={()=>{setcategory("haircare")}}>Haircace</div>
  <div  onClick={()=>{setcategory("skincare")}}>Skincare</div>
 
</div> */}

{/* /////////// */}

<div className='catrgory-items'>
{
  catrgory_list.map((element,index)=>
  {
    return<>
    <div className={`${colorcheck}==element.name` ? null :'bg-warning'} onClick={()=>{getdata(element)}}>{element.name}</div>
    </>
  })
}
</div>
      </div>

      <div className='col-9 col-md-9 p-0'>
      <div className='row justify-content-evenly mobile-row'>
      {
       
       juice_data.filter((element)=>{
      if(category=="")
      {
        return element
      }
          else if(element.cat=== category)
           {
            return element
           }
    }).map((item,index)=>
    {
         return <>
           <div className='col-5 col-md-3 data-col p-2 '>
            <img src={item.image} className='mobile-img'></img>
            <div className='mobile-text'>
              <div>
                {item.name}
              </div>
              <div>
               price: {item.price}
              </div>
              <div>
                weight: {item.weight}
              </div>
            </div>
           </div>
          </>
    })
    
  }
  </div>

      </div>

    </div>
  
  </>
}

export default Colddrink

     
