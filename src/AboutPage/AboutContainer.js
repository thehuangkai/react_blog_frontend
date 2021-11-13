import React, { useState, useEffect } from "react"
import Bio from './Bio'
import Skills from './Skills'
import './AboutPage.css'
const AboutContainer = () => {
  return (
    <div className="body">
      <Bio />
      <Skills />

    </div>
  )
}

export default AboutContainer