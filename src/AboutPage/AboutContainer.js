import React, { useState, useEffect } from "react"
import Bio from './Bio'
import Education from './Education'
import Profile from './Profile'
import './AboutPage.css'

const AboutContainer = () => {
  return (
    <div className="body">
      <Profile />
      <Bio />
      <Education />

    </div>
  )
}

export default AboutContainer