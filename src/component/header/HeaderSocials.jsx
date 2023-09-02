import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {SiSkype} from "react-icons/si"

const headersocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/abhishek-jangid-885602255" target='_blank'><BsLinkedin/></a>      
        <a href="https://github.com/Abhi-3232" target='_blank'><FaGithub/></a>      
        <a href="https://join.skype.com/invite/x3UEz3g3xJyF" target='_blank'><SiSkype/></a>      
    </div>
  )
}

export default headersocials
