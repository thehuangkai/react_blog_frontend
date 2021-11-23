import React, { useState, useEffect } from "react"


const SkillsList = props => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../Assets/skills', false, /\.(png|jpe?g|svg)$/));


    return (
        <div className="skills">
            <h1>Frontend</h1>


            {Object.keys(images).map((keyName, i) => (
                
                <img className="skill-icon" key={i} src={images[keyName].default} />
            ))}

            
        </div>
    )

}

export default SkillsList