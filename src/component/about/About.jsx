import React from 'react';
import './about.css';
import ME from '../../assets/me-about.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <artical className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </artical>

            <artical className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Worked in</h5>
              <small>10+ Projects</small>
            </artical>

            <artical className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4 completed</small>
            </artical>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem tempore, quam sit aliquam culpa laborum explicabo labore eveniet. Repudiandae, esse ut. Esse veritatis at, quidem corporis enim quae nam. Amet?</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
