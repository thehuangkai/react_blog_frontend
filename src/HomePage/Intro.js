import React from "react"
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../Assets/profile1.jpeg';

const Intro = () => {

    return (
        <div className="intro">
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <div style={{fontSize:20, fontWeight:600}}>Hey there,</div>
            <div style={{fontSize:32, fontWeight:600}}> I'm Huang Kai</div>
            <ReactTypingEffect style={{fontSize:20, fontWeight:700}} text={['Product Manager','Full Stack Developer', 'Problem Solver']} speed={50} eraseDelay={500} />
        </div>
    )

}

export default Intro