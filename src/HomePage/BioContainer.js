import React from "react"
import { 
    useHistory 
} from "react-router-dom";

const BioContainer = () => {

    let history = useHistory();

    const goProjects = () => {
        history.push("/projects");
    }

    return (
        <div className="about">
            <div className="title">About me</div>
            <div className="about-content"> I am a Full Stack Web and Mobile Software Engineer with experience in Product Management and UIUX in a wide range of companies ranging from startups to big tech. <br/><br/>
            I believe in continuously getting my hands dirty with the latest technological advancements and working with others to create innovative solutions for the world.</div>
            <div onClick={goProjects} className="project-button">See my projects</div>
        </div>
    )

}

export default BioContainer