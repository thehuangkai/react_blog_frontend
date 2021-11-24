import React, { useState, useEffect } from "react"

const SkillsItem = props => {

    return (
        <div>
            {Object.keys(props.images).map((keyName, i) => (
                <div className = "skills-column">
                  <img className = "skill-icon" key={i} src={props.images[keyName].default} />
                    <div className="skill-name">{keyName.replace(/\.[^/.]+$/, "").charAt(0).toUpperCase() + keyName.replace(/\.[^/.]+$/, "").slice(1)}</div>
                </div>
                
            ))}
        </div>
    )

}

export default SkillsItem