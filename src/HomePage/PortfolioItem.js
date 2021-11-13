import React, { useState, useEffect } from "react"
import reactDom from "react-dom"

const PortfolioItem = props => {

    const { title, intro, preview_image } = props.portfolio

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

    return (
        <li style={liStyle}>
            <img src={preview_image} style={imgStyle} />
            <br />
            <div style={titleStyle}>{title}</div>
            <br />
            <div style={introStyle}>{intro}</div>
        </li>
    )
}

export default PortfolioItem