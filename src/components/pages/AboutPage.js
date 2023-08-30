import React from 'react'
import {Link} from 'react-router-dom'


function AboutPage() {
  return (
    <div className='about'>
      <p>Hello, I have develoeped this feedback to share to my interviewers, recruiters, professors, collegues and mentors.</p>
      <p> Please leave a feedback so I can work on myself, better and harder</p>
      <p>
        <Link to ='/'>Home</Link>
      </p>
    </div>
  )
}

export default AboutPage
