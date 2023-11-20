import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import "./footer.css"
const Footer = () => {
  return (
    <div className="footer">
    <div className="social-icons">
      <a href="https://www.facebook.com/" target="" rel="">
        <FaFacebook />
      </a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <p> 2023 Your Company Name. All rights reserved.</p>
    </div>
  )
}

export default Footer