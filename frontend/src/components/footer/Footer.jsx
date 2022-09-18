import React from 'react';
import { RiFacebookLine, RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import './footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='logo-container'>
          <h2 className='footer-logo'>.myShop</h2>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          <div className='social-medias'>
            <RiFacebookLine size={35} className="icon" />
            <RiWhatsappLine size={35} className="icon" />
            <RiInstagramLine size={35} className="icon" />
          </div>
        </div>
        <div>
          <h4>Links</h4>
          <ul>
            <li>Overon</li>
            <li>social media</li>
            <li>counters</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            <li>terms and conditions</li>
            <li>privacy and policy</li>
            <li>contact</li>
          </ul>
        </div>
        <div>
          <h4>Get in touch</h4>
          <ul>
            <li>Somewhere in the world</li>
            <li>985-532168</li>
            <li>john@doe.me</li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>© {year} .MyShop All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer