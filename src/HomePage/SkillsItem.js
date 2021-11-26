import React from "react"
import { Col } from 'react-bootstrap'

const SkillsItem = props => {

    return (
        <div>
            {Object.keys(props.images).map((keyName, i) => (
                <Col xs={2.4} className = "skills-column">
                  <img className = "skill-icon" key={i} src={props.images[keyName].default} />
                    <div className="skill-name">{keyName.replace(/\.[^/.]+$/, "").charAt(0).toUpperCase() + keyName.replace(/\.[^/.]+$/, "").slice(1)}</div>
                </Col>
                
            ))}
        </div>
    )

}

export default SkillsItem