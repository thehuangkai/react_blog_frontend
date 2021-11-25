import React, { useState, useEffect } from "react"
import Bio from './Bio'
import Education from './Education'
import Profile from './Profile'

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