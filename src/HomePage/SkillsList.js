import React from "react"
import SkillsItem from "./SkillsItem"
import { Row } from 'react-bootstrap'

const SkillsList = () => {

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
    }

    const images = importAll(require.context('../Assets/Skills', false, /\.(png|jpe?g|svg)$/));

    return (
        <Row>
            <SkillsItem images ={images}/>
        </Row>
    )

}

export default SkillsList