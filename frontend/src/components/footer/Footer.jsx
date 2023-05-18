import React from 'react';
import { RiFacebookLine, RiInstagramLine, RiWhatsappLine } from 'react-icons/ri';
import { Link } from "react-router-dom";
import './footer.css';

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='logo-container'>
          <h2 className='footer-logo'>.biboShop</h2>
          <p>Cotonou Benin, tous droits reserves</p>
          <div className='social-medias'>
            <RiFacebookLine size={35} className="icon" />
            <RiWhatsappLine size={35} className="icon" />
            <RiInstagramLine size={35} className="icon" />
          </div>
        </div>
        <div>
          <h4>A propos de nous</h4>
          <ul>
            <li><Link to="">a propos</Link>
              </li>
            <li><Link to="">termes et conditions</Link></li>
            <li><Link to="">politique de confidentialite</Link></li>
            <li><Link to="">contact</Link></li>
          </ul>
        </div>
        <div>
          <h4>Contact</h4>
          <ul>
            <li>Cotonou Benin</li>
            <li>985-532168</li>
            <li>john@doe.me</li>
          </ul>
        </div>
      </div>
      <div className='copyright'>
        <p>© {year} Contact Developper</p>
      </div>
    </div>
  )
}

export default Footer