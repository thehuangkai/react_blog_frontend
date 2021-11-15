import React, { useState, useEffect } from "react"
import Bio from './Bio'
import Skills from './Skills'
import Profile from './Profile'

const AboutContainer = () => {
  return (
    <div className="body">
      <Profile />
      <Bio />
      <Skills />

    </div>
  )
}

export default AboutContainer