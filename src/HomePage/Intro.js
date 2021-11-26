import React from "react"
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../Assets/profile1.jpeg';

const Intro = () => {

    return (
        <div className="intro">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <div className="intro-header">Hey there,</div>
            <div className="intro-name"> I'm Huang Kai</div>
            <ReactTypingEffect className="intro-typewriter" text={['Product Manager','Full Stack Developer', 'Problem Solver']} speed={50} eraseDelay={500} />
        </div>
    )

}

export default Intro