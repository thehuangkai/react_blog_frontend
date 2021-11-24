import React, { useState, useEffect } from "react"
import {
    useHistory,
} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const PortfolioItem = props => {

    const { title, intro, preview_image, slug, tech_stack, images } = props.portfolio
    let history = useHistory();

    let titleStyle = {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 21,
        textTransformation: "None"
    }

    let introStyle = {
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 14
    }

    // use RETURN function for unmount only
    useEffect(() => {
        return () => {
        }
    }, [])

    const goDetails = () => {
        history.push("/" + slug);
    }

    return (
        <div className="portfolio-column">

            <div className="portfolio-item">
                <img className="portfolio-image" src={images} />
                <div className="portfolio-writeup">
                    <div style={titleStyle}>
                        {title}
                    </div>
                    <div style={introStyle}>
                        {intro}
                    </div>
                    <div>
                        {tech_stack}
                    </div>
                </div>
            </div>


            <div onClick={goDetails} className="button-style">
                Details
            </div>




        </div>


    )
}

export default PortfolioItem