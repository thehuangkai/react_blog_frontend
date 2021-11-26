import React from "react" 
import SkillsList from "./SkillsList"
import { 
    useHistory 
} from "react-router-dom";
import { Container } from 'react-bootstrap'


const SkillsContainer = () => {

    let history = useHistory();

    const goProjects = () => {
        history.push("/portfolio");
    }

    return (
        <Container className="skills">
            <div className="title">Skills</div>
            <SkillsList/>
            <div onClick={goProjects} className="project-button2">See my projects</div>
        </Container>
    )

}

export default SkillsContainer