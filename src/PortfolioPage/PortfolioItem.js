import React, { useState, useEffect } from "react"
import {
    useHistory,
} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


const PortfolioItem = props => {

    const { title, intro, slug, tech_stack, images } = props.portfolio
    let history = useHistory();

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
                    <div className="portfolio-title">
                        {title|| <Skeleton count={3}/>}
                    </div>
                    <div className="portfolio-intro">
                        {intro|| <Skeleton count={10}/>}
                    </div>
                    <div className="portfolio-intro">
                        Tech/Tools used: {tech_stack|| <Skeleton count={3}/>}
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