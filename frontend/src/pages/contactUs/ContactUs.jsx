import React from "react";
import { FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./contactUs.css"

const ContactUs = () => {
  return (
    <div className="contactus-container">
      <div className="contactus">
        <div className="contactus-section-one">
          <h2>We're here</h2>
          <p>Our door is always open for all of your queries</p>
          <h3>Our office</h3>
          <div className="contactus-address">
            <p>New york</p>
            <p>Street 123</p>
            <p>United state of America 🇺🇸</p>
          </div>
          <div className="contactus-icons">
            <FaTwitter />
            <FaInstagram />
            <FaWhatsapp />
          </div>
        </div>
        <div className="contactus-section-two">
          <h2>Let's talk.</h2>
          <p>Lorem ipsum dolor sit amet consectetur</p>
          <form action="">
            <input type="text" placeholder="Full name" />
            <input type="text" placeholder="Email" />
            <textarea placeholder="Message" />
            <div className="contactus-btn">Send</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
