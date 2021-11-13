import React from "react"
import profilepic from '../Assets/profile1.jpeg';

const Profile = () => {
  return (
    <div>
        <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
        <div className="profile_subtitle">Hey there,</div>
        <div style={{fontSize:40, fontWeight:600}}> I'm Huang Kai</div>
    </div>
  )
}

export default Profile