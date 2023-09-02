import React from 'react'
import CV from '../../assets/Abhishek jagid resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} className="btn" download>Download Resume</a>
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  )
}

export default CTA
