import React, { useState, useEffect } from "react"
import { 
    Link,
    useHistory 
} from "react-router-dom";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const PortfolioItem = props => {

    const { title, intro, preview_image, slug } = props.portfolio
    let history = useHistory();

    const liStyle = {
        display: "inline-block",
        width:"30%",
        float:"left",
        marginRight:"3vw"
    }

    const titleStyle = {
        marginTop: "2vw"
    }

    const introStyle = {
        fontSize: 16,
        fontFamily: "Raleway",
        color: "#212121"+66,
        textTransform: "none",
        textAlign:"left",
        lineHeight: "150%"
    }

    const imgStyle = {
        width: "100%",
    }

    // use RETURN function for unmount only
    useEffect(() => {
        return () => {
        }
    }, [])

    const goDetails = () => {
        history.push("/"+slug);
    }

    return (
        <li style={liStyle}>
            <img src={preview_image} style={imgStyle} />
            <br />
            <div style={titleStyle}>{title || <Skeleton count={10}/>}</div>
            <br />
            <div style={introStyle}>{intro || <Skeleton count={10}/>}</div>
            <div className="left">
            <div onClick={goDetails} className="button-style">
                Details
            </div>            
            </div>
        </li>
    )
}

export default PortfolioItem