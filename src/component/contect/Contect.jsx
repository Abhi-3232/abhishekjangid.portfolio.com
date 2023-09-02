import React from 'react';
import './contect.css';
import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contect = () => {

  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_upb0gdg', 'template_stglmlc', form.current, 'tftpr07F36oIypEk_')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>abhijangid5555@gmail.com</h5>
            <a href="mailto:abhijangid5555@gmail.com" target={'_blank'}>Send a message</a>
          </article>
          <article className='contact__option'>
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>Abhishek Jangid</h5>
            <a href="https://www.linkedin.com/in/abhishek-jangid-885602255" target={'_blank'}>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 99938-78792</h5>
            <a href="https://api.whatsapp.com/send?phone=9993878792" target={'_blank'}>Send a message</a>
          </article>
        </div>

        {/* ============End of Contact Option=============== */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contect
