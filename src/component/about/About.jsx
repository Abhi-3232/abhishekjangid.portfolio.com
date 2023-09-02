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

          <p>I'm Abhishek Jangid, a dedicated Frontend Developer. With 6 months of internship experience, I've delved into creating captivating web interfaces. My journey continues beyond the internship as I stay updated with the latest technologies and design trends. I'm passionate about merging creativity and technology to craft exceptional web experiences. When not coding, I seek inspiration in art. Let's collaborate to bring your digital visions to life.</p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
