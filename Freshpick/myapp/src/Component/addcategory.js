import React from 'react'
import './addcategory.css'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { mycartdataredux } from './store/CartSlice';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
const Addcategory = () => {
      let [show, setShow] = useState(false);
   const dispatch=useDispatch()
   let data = useSelector((state) => state.category);
   console.log("data",data)
   console.log("type",typeof(data))

if(data.length!=0){
  localStorage.setItem("category", JSON.stringify(data))
}

   console.log("s",typeof(data))
   if(data.length==0)
    {
      data = JSON.parse(localStorage.getItem("category"))
    }

   let [mydata, setmydata]=useState()

    let getCart=(data)=>
    {
             dispatch(mycartdataredux(data))
             setShow(true)
             
    }


  return <>
   <div id="prod_left_right">
      <div id="left_prod">
      <img src={data.image}></img>
      <div  className='mobile-prod'>
          <div id="right_prod_info">
            <span id="right_name">{data.name}</span>
            <button onClick={()=>{getCart(data)}}>add to cart</button>
            <div id="right_weight">{data.wt}</div>
            <div id="right_pric d-flex gap-3"> RS:  {data.price}</div>
            <div id="hr"></div>
          </div>
          <div id="right_prod_unit">
          </div>
        </div>
        <div id="product">Product Details</div>
        <div id="prod_details">
          <div id="shelf_life" class="width border fs height pd">
            <span class="fs2 mg lh cl2">Shelf Life</span>
            <div class="fs2 mg2 lh2 cl">3 months</div>
          </div>
          <div id="manufacture" class="width border fs height pd">
            <span class="fs2 mg lh cl2">Manufacturer Details</span>
            <div class="fs2 mg2 lh2 cl">
              KRBL Ltd., C-32, 5th Floor, Sector-62, Noida, Uttar Pradesh-201301
            </div>
          </div>
          <div id="market" class="width border fs height pd">
            <span class="fs2 mg lh cl2">Marketed By</span>
            <div class="fs2 mg2 lh2 cl">
              Hands On Trades Pvt. Ltd. 19, RPS, Sheikh Sarai 1 New Delhi - 110
              017 10017011003999
            </div>
          </div>
          <div id="country" class="width border fs height pd">
            <span class="fs2 mg lh cl2">Country of Origin</span>
            <div class="fs2 mg2 lh2 cl">India</div>
          </div>
          <div id="customer_care" class="width border pd fs">
            <span class="fs2 mg lh cl2">Customer Care Details</span>
            <div class="fs2 mg2 lh2 cl">
              Customer Care No. 9041951402 Customer Care
              Mail Id: abhisheksalaria0007@gmail.com
            </div>
          </div>
          <div id="seller" class="width border fs height pd">
            <span class="fs2 mg lh cl2">Seller</span>
            <div class="fs2 mg2 lh2 cl">FNV RETAIL PRIVATE LIMITED</div>
          </div>
          <div id="ingredients" class="width border pd fs">
            <span class="fs2 mg lh cl2">Key Features</span>
            <div class="fs2 mg2 lh2 cl">
              Light and fluffy texture <br />
              Aromatic rice <br />
              Superior quality <br />
              Long slender grains <br />
            </div>
          </div>
          <div id="unit" class="width border pd fs">
            <span class="mg fs2 lh cl2">Unit</span>
          </div>
          <div id="disclaimer" class="width border pd fs">
            <span class="fs2 mg lh cl2">Disclaimer</span>
            <div class="fs2 mg2 lh2 cl">
              Every effort is made to maintain accuracy of all information.
              However, actual product packaging and materials may contain more
              and/or different information. It is recommended not to solely rely
              on the information presented.
            </div>
          </div>
          <div id="description" class="width border pd fs">
            <span class="fs2 mg lh cl2">Description</span>
            <div class="fs2 mg2 lh2 cl">
              Make your rice dishes tastier with Daawat Rozana Gold Basmati
              Rice, The rice is cleaned and packaged hygienically, Basmati rice
              has zero cholesterol that is good for heart health, This rice is
              ideal for making rice dishes like biryani, pulao, jeera rice,
              fried rice, and kheer, Basmati rice has an amazingly appetising
              aroma that makes your rice dishes delectable,The rice is
              non-sticky, It has nutrients like iron, folate, vitamin B-complex,
              and magnesium that are beneficial for your health.
            </div>
          </div>
        </div>
      </div>
      <div id="right_prod">
        <div id="top">
          <div id="right_prod_info">
            <span id="right_name">{data.name}</span>
            <button onClick={()=>{getCart(data)}}>add to cart</button>
            <div id="right_weight">{data.wt}</div>
            <div id="right_pric d-flex gap-3"> RS:  {data.price}</div>
            <div id="hr"></div>
          </div>
          <div id="right_prod_unit">
          </div>
        </div>
        <div id="bottom">
          <div id="why_shop">Why shop from FreshPick?</div>
          <div id="shopping_details">
            <div class="flx">
              <div class="left_img">
                {/* <img
                  src="https://blinkit.com/images/home/express-delivery-icon-93fce76.png"
                  alt=""
                /> */}
              </div>
              <div class="right_info">
                10 minute grocery now <br />Get your order delivered to your
                doorstep at the earliest from dark stores near you.
              </div>
            </div>
            <div class="flx">
              <div class="left_img">
                {/* <img
                  src="https://blinkit.com/images/home/footer-best-price-icon-90b5bd7.png"
                  alt=""
                /> */}
              </div>
              <div class="right_info">
                Best Prices<br />
                & Offers Cheaper prices than your local supermarket, great
                cashback offers to top it off.
              </div>
            </div>
            <div class="flx">
              <div class="left_img">
                {/* <img
                  src="https://blinkit.com/images/home/footer-genuine-products-icon-d2756ce.png"
                  alt=""
                /> */}
              </div>
              <div class="right_info">
                Wide Assortment<br />
                Choose from 5000+ products across food, personal care, household
                & other categories.
              </div>
            </div>
            <div class="flx">
              <div class="left_img">
                {/* <img
                  src="https://blinkit.com/images/home/footer-easy-returns-icon-02b777e.png"
                  alt=""
                /> */}
              </div>
              <div class="right_info">
                Easy Returns<br />
                Not satisfied with a product? Return it at the doorstep & get a
                refund within hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  { show && <ToastContainer position="bottom-end" className="p-3" style={{ zIndex: 1 }}>
      
        <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
          <Toast.Header className='bg-success'>
           
            <strong className="me-auto text-white">Item Added</strong>
            <small className="text-muted">2 seconds ago</small>
          </Toast.Header>
          <Toast.Body className='text-success Toast-body' >Successfully Added Into Cart</Toast.Body>
        </Toast>
      </ToastContainer> }
   
  
  </>
}

export default Addcategory
