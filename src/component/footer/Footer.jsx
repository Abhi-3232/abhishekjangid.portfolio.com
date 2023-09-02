import React from 'react'
import './footer.css'
import {BiLogoLinkedin} from 'react-icons/bi'
import {BsWhatsapp} from 'react-icons/bs'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Abhishek Jangid</a>

      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://join.skype.com/invite/x3UEz3g3xJyF" target={'_blank'}><IoLogoTwitter/></a>
        <a href="https://www.linkedin.com/in/abhishek-jangid-885602255" target={'_blank'}><BiLogoLinkedin/></a>
        <a href="https://api.whatsapp.com/send?phone=9993878792" target={'_blank'}><BsWhatsapp/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Abhishek Jangid Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
