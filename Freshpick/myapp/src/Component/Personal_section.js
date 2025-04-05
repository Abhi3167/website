import React from 'react'
import { personalCare_arr } from './personal'
import { useNavigate } from 'react-router-dom'
import './Personal_section.css'
const Personal_section = () => {
  const navigate = useNavigate()
  return <>
  {/* {
    personalCare_arr.map((item,index)=>
    {
         return <>
         <img src={item.image}></img>
          </>
    })
    
  } */}
  <div className='px-3 fs-4 fw-bold text-lg-center mt-lg-4'> Groceries & Kitchen</div>
    <div className=' mobile-flex'>
    <div onClick={()=>{navigate('/fruits')}}>
          
            <img className="personal-img"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=200,h=256/layout-engine/2021-12/category-1.png?61ea837b72faf"
              alt=""
            />
     
        </div>
        <div onClick={()=>{navigate('/grocery_staple')}}>
         
            <img className="personal-img"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=200,h=256/layout-engine/2021-12/category-5.png?61ea837dbfaca"
              alt=""
            />
   
        </div>
        <div onClick={()=>{navigate('/Colddrink')}}>
          
            <img className="personal-img"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=200,h=256/layout-engine/2021-12/category-3.png?61ea837c94944"
              alt=""
            />
        
        </div>
        <div onClick={()=>{navigate('/personal_care')}}> 
       
            <img className="personal-img"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=200,h=256/layout-engine/2021-12/category-12.png?61ea83824149d"
              alt=""
            />
        
        </div>
        <div>
          <a href="">
            <img className="personal-img"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=200,h=256/layout-engine/2021-12/category-2.png?61ea837c0849c"
              alt=""
            />
          </a>
        </div>
        <div>
          <a href="">
            <img className="personal-img"
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=200,h=256/layout-engine/2021-12/category-4.png?61ea837d36364"
              alt=""
            />
          </a>
        </div>
        <div className='mobile-none'>
          <a href="">
            <img className="personal-img "
              src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=50,metadata=none,w=200,h=256/layout-engine/2021-12/category-6.png?61ea837e62719"
              alt=""
            />
          </a>
        </div>
    </div>

  </>
}

export default Personal_section
