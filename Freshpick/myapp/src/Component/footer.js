import React from 'react'
import './footer.css'
const Footer = () => {
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
          <a href="tel: +91-8872024001"  style={{textDecoration:'none'}} class="text-white">
            <p class="d-flex align-items-center gap-2 contact-item"><i class="bi bi-telephone-inbound-fill fs-3"></i>
              +91-8872024001</p>
          </a>
          <a href="mailto:astrolivechat1@gmail.com?subject=Inquiry about AstroLiveChat&body=Hello, I have a question about AstoLiveChat Features..."
           style={{textDecoration:'none'}} class="text-white">
            <p class="d-flex align-items-center gap-2 contact-item"><i
                class="bi bi-envelope-at-fill fs-3"></i>astrolivechat1@gmail.com</p>
          </a>
        </div>

        <div class="col-md-5 col-lg-3 col-sm-5 footer-border">
          <h3>Our Features</h3>
          <p>Astro Live Chat is a top-rated app delivering accurate, detailed future predictions.</p>
          <div class="social-icons">
            <a href="mailto:astrolivechat1@gmail.com"><i class="bi bi-envelope-fill"></i></a>
            <a href="https://www.facebook.com/astrolivechat" target="_blank"><i class="bi bi-facebook"></i></a>
            <a href="https://play.google.com/store/apps/details?id=com.astrolivechat.users&hl=en_GB" target="_blank"><i
                class="bi bi-google"></i></a>
            <a href="https://www.instagram.com/astro.livechat" target="_blank"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <div class="col-md-5 col-lg-3 col-sm-5 footer-border">
          <h3>What We Offer</h3>
          <div class="offer-list">
            <p><i class="bi bi-chevron-right"></i>Chat with Astrologers</p>
            <p><i class="bi bi-chevron-right"></i> Personalized Horoscope</p>
            <p><i class="bi bi-chevron-right"></i> AstroMall Remedies</p>
            <p><i class="bi bi-chevron-right"></i> Book a Pooja</p>
            <p><i class="bi bi-chevron-right"></i> Free Kundli </p>
          </div>
        </div>

        <div class="col-md-5 col-lg-3 col-sm-5 footer-border">
          <h3>AstroLiveChat</h3>
          <img src="./images/logo_astrolivechat.png" class="img-fluid" alt="Instagram"
           style={{height:'100px', width:'100px'}}/>
        </div>
        <div class="col-12 footer-copyright">
          <div class="text-center mt-2 fw-bold">Copyright by AstroLiveChat</div>
        </div>
      </div>
    </div>
  </div>
  </>
}

export default Footer
