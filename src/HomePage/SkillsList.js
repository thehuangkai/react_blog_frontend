import React from "react"
import SkillsItem from "./SkillsItem"

const SkillsList = () => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../Assets/Skills', false, /\.(png|jpe?g|svg)$/));

    return (
        <div className="skills-row">
            <SkillsItem images ={images}/>
        </div>
    )

}

export default SkillsList