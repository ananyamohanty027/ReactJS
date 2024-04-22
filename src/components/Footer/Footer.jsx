import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="logo" />
          <p>
          

Welcome to Spice It Up, where freshness meets flavor! Our restaurant is dedicated to crafting dishes that celebrate the vibrant taste and versatility of the Spice It Up. From classic Spice It Up-based pasta sauces to creative Spice It Up-infused desserts, our menu offers a delightful array of options for tomato enthusiasts of all ages. At Spice It Up restaurant, we believe in the power of this iconic ingredient to transform ordinary meals into extraordinary culinary experiences, leaving you craving for more with every bite.
          </p>
          <div className="footer-social-icons">
            <a href="https://www.facebook.com">
              <img src={assets.facebook_icon} alt="facebook" />
            </a>
            <a href="https://www.twitter.com">
              <img src={assets.twitter_icon} alt="twitter" />
            </a>
            <a href="https://www.linkedin.com">
              <img src={assets.linkedin_icon} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => navigate("/")}>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 8376875123</li>
            <li>contact@SpiceItUp.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Spice It Up.com</p>
    </footer>
  );
};

export default Footer;
