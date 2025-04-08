import React from 'react'
import './search.css'
import { all_data } from './search_data'
import { useSelector } from 'react-redux'
import { useState ,useEffect} from 'react'
import './personal_care.css'
const Search= () => {
  let [searchdata,setsearchdata]=useState("")
  let data=useSelector((state)=>state.search)
  let [err,seterr]=useState(false)
  // console.log("search data",data)
  // setsearchdata(data)
  useEffect(()=>
  {
    setsearchdata(data)
  },[data])
  return <>
  <div className='row mobliee-c'>
      <div className='col-3 col-md-2 d-flex justify-content-center mt-5 pos12'>
   

<div className='catrgory-items'>
   Showing results for <span style={{color:'red'}}>{searchdata}</span>
</div>
      </div>

      <div className='col-9 col-md-9 p-0'>
      <div className='row d-flex justify-content-evenly mobile-row'>

  
{
  all_data.filter((element)=>
  {
          if(element.cat.toLowerCase()===searchdata.toLowerCase())
          {
            return element
          }
  }).map((element)=>
  {
    return <>
    {console.log("element",element)}
    <div className='col-5 col-md-3 data-col p-2 '>
    <img src={element.image} className='mobile-image'></img>
    <div className='mo-name'>{element.name}</div>
    <div className='mobile-text'>
              <div>
                {element.name}
              </div>
              <div>
               price: {element.price}
              </div>
              <div>
                weight: {element.weight}
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
export default Search
