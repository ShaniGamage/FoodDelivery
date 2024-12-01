import React from 'react'
import'./Footer.css'
import {assets} from '../../frontend_assets/assets'

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt=""/>
            <p>
                A food delivery app allows users to order food from local restaurants and have it delivered to their doorstep. The app typically offers features like browsing menus, selecting food items, customizing orders, making secure payments, and tracking deliveries in real-time
            </p>
            <div className="footer-social-icons">
              <img src={assets.facebook_icon} alt="" />  
              <img src={assets.twitter_icon} alt="" />  
              <img src={assets.linkedin_icon} alt="" />  
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>HOME</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
        <h2>GET IN TOUCH</h2>
            <ul>
                <li>072 1527894</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-copyright">Copyright 2024 @ Tomato.com - All right reserved.</p>
    </div>
  )
}

export default Footer
