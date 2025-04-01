import React from 'react'
import './footer.css'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ModalBody from 'react-bootstrap/esm/ModalBody';
const Footer = () => {


  const [lgShow, setLgShow] = useState(false);
  const [lgShow1, setLgShow1] = useState(false);
  const [lgShow2, setLgShow2] = useState(false);
  const [lgShow3, setLgShow3] = useState(false);
  const [lgShow4, setLgShow4] = useState(false);
  return<>
  <div class="container-fluid  text-white footer" id="contactus">
    <div class="container">
      <div class="row py-5 text-center text-md-start justify-content-around">

        <div class="col-md-5  col-lg-3 col-sm-5 footer-sm-border">
          <h3>Contact Us</h3>
          <a href="https://maps.app.goo.gl/4CX2EeZgwRotC4ebA" target="_blank" style={{textDecoration:'none'}}
            class="text-white">
            <p class="d-flex align-items-center gap-2 contact-item"><i class="bi bi-geo-alt-fill fs-3"></i> Chandigarh,
              India
            </p>
          </a>
          <a href="tel: +91-9041951402"  style={{textDecoration:'none'}} class="text-white">
            <p class="d-flex align-items-center gap-2 contact-item"><i class="bi bi-telephone-inbound-fill fs-3"></i>
              +91-9041951402</p>
          </a>
          <a href="mailto:abhisheksalaria99@gmail.com?subject=Inquiry about Freshpick&body=Hello, I have a question about Freshpick Features..."
           style={{textDecoration:'none'}} class="text-white">
            <p class="d-flex align-items-center gap-2 contact-item"><i
                class="bi bi-envelope-at-fill fs-3"></i>abhisheksalaria99@gmail.com</p>
          </a>
        </div>

        <div class="col-md-5 col-lg-3 col-sm-5 footer-border">
          <h3>Our Features</h3>
          <p> Instant delivery service in India<br></br>
          Order products at just a tap - milk, eggs, bread, cooking oil, ghee, atta, rice, fresh fruits & vegetables, chocolates, chips, biscuits, cold drinks, pet food and a lot more.
          </p>
          <div class="social-icons">
            {/* <a href="mailto:astrolivechat1@gmail.com"><i class="bi bi-envelope-fill"></i></a>
            <a href="https://www.facebook.com/astrolivechat" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="https://play.google.com/store/apps/details?id=com.astrolivechat.users&hl=en_GB" target="_blank"><i
                class="bi bi-google"></i></a>
            <a href="https://www.instagram.com/astro.livechat" target="_blank"><i class="bi bi-instagram"></i></a> */}
          </div>
        </div>

        <div class="col-md-5 col-lg-3 col-sm-5 footer-border">
          <h3>What We Offer</h3>
          <div class="offer-list">

          
     
      
      <p onClick={() => setLgShow(true)}><i class="bi bi-chevron-right"></i>About Us</p>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>About</div> <div style={{color:'#54b226'}}>Us</div></div> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>Imagine needing something when you are at home and getting it before you have tied your shoelaces to step out. We are revolutionizing e-commerce by making the stuff most important to you, available to you in a blink of your eye.
        <p>We want our customers to focus on the more important things for themselves and not need to plan for the little things that life needs on an everyday basis. We are here to get your chores out of your way.  </p> 

Our mission is – “instant commerce indistinguishable from magic”. Using a backbone of technology, data sciences, and rich customer insights, we've built a dense and fast network of partner stores enabling lightning fast deliveries in minutes.

We are already one of the largest e-grocery companies in India. Our ambition however, is to be 100x this size in the next five years. <br></br>

In order to become one of the most important e-retail companies of our generation, we need builders who can think on their feet, take extreme ownership and commit to making outcomes happen. If you are ambitious, smart, and don’t have an ego about it, we’d love to hear from you. </Modal.Body>
      </Modal>
            
           {/* prvacy model */}
           <Modal
        size="lg"
        show={lgShow1}
        onHide={() => setLgShow1(false)}
        aria-labelledby="example-modal1-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal1-sizes-title-lg">
          <div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Privacy</div> <div style={{color:'#54b226'}}>Policy</div></div> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'> We i.e. "FreshPick  Private Limited" (formerly known as Groceries India Private Limited) (“Company”), are committed to protecting the privacy and security of your personal information. Your privacy is important to us and maintaining your trust is paramount.

This privacy policy explains how we collect, use, process and disclose information about you. By using our website/ app/ platform and affiliated services, you consent to the terms of our privacy policy (“Privacy Policy”) in addition to our ‘Terms of Use.’ We encourage you to read this privacy policy to understand the collection, use, and disclosure of your information from time to time, to keep yourself updated with the changes and updates that we make to this policy.

This privacy policy describes our privacy practices for all websites, products and services that are linked to it. However this policy does not apply to those affiliates and partners that have their own privacy policy. In such situations, we recommend that you read the privacy policy on the applicable site.

Should you have any clarifications regarding this privacy policy, please write to us at privacy@FreshPick.com </Modal.Body>
      </Modal>
      <p onClick={() => setLgShow1(true)}><i class="bi bi-chevron-right"></i>Privacy Policy</p>

      {/* term condition */}
      <Modal
        size="lg"
        show={lgShow2}
        onHide={() => setLgShow2(false)}
        aria-labelledby="example-modal2-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal2-sizes-title-lg">
          <div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Terms</div> <div style={{color:'#54b226'}}>Conditions</div></div> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>Terms of use
Thank you, for using FreshPick.

For your information: “FreshPick  Private Limited”, is a company incorporated under the Companies Act, 2013 with its registered office at Village Gohla P/O Khojki Chak Bamial Block Pathankot,145027 Punjab,INDIA (hereinafter referred as “We”/ “FreshPick”/ “Us”/ “Our”).

For abundant clarity, FreshPick and/ or the trademark "FreshPick" are neither related, linked or interconnected in whatsoever manner or nature, to “FRESHPICK.COM” (which is a real estate services business operated by “White Consultancy Services Private Limited”). 

The terms and conditions/ terms of use ("Terms") governing the FreshPick Platform (defined later) and the Services (defined later).   </Modal.Body>
      </Modal>
      <p onClick={() => setLgShow2(true)}><i class="bi bi-chevron-right"> </i>Terms and Conditions</p>

      <p onClick={() => setLgShow3(true)}><i class="bi bi-chevron-right"></i>Security</p>
      <Modal
        size="lg"
        show={lgShow3}
        onHide={() => setLgShow3(false)}
        aria-labelledby="example-modal3-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal3-sizes-title-lg">
          <div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Secu</div> <div style={{color:'#54b226'}}>rity</div></div> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>Help keep FreshPick safe for the community by disclosing security issues to us
We take security seriously at FreshPick. If you are a security researcher or expert, and believe you’ve identified security-related issues with FreshPick website or apps, we would appreciate you disclosing it to us responsibly.

Our team is committed to addressing all security issues in a responsible and timely manner, and ask the security community to give us the opportunity to do so before disclosing them publicly. Please submit a bug to us on our HackerOne page, along with a detailed description of the issue and steps to reproduce it, if any. We trust the security community to make every effort to protect our users data and privacy.

For a list of researchers who have helped us address security issues, please visit our HackerOne page.

Submit the bugs to us on our HackerOne page, along with a detailed description of the issue and steps to reproduce it</Modal.Body>
</Modal>


            
            {/* <p><i class="bi bi-chevron-right"></i> Resources</p> */}
            <p onClick={() => setLgShow4(true)}><i class="bi bi-chevron-right"></i>Contact Us</p>
            <Modal
        size="lg"
        show={lgShow4}
        onHide={() => setLgShow4(false)}
        aria-labelledby="example-modal4-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal4-sizes-title-lg">
          <div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Contact</div> <div style={{color:'#54b226'}}>Us</div></div> 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modalbody'>
        We would LOVE to hear from you..<br></br>


Beware - Do not share bank details such as account number, UPI pin, CVV, OTP, or card details with unknown people posing to be FreshPick. A FreshPick representative will never ask for this information.

FreshPick does not have any official customer care phone line. Beware of fake numbers! For any issues, please use our in-app support only, where we are available.
        </Modal.Body>
</Modal>

          </div>
        </div>

        <div class="col-md-5 col-lg-3 col-sm-5 footer-border">
          <h3>Logo</h3>
          <div className='d-flex' style={{ fontWeight:'bold' , fontSize:'32px'}}><div style={{color:'#f8cb46'}}>Fresh</div> <div style={{color:'#54b226'}}>Pick</div></div>
        </div>
        <div class="col-12 footer-copyright">
          <div class="text-center mt-2 fw-bold">Copyright by FreshPick</div>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Footer
