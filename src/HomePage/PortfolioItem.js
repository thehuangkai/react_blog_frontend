import React, { useState, useEffect } from "react"
import reactDom from "react-dom"

const PortfolioItem = props => {
    const [editing, setEditing] = useState(false)

    const { id, title, intro, preview_image } = props.portfolio

    const liStyle = {
        display: "inline-block",
        width:"50%",
        float:"left"
    }

    const titleStyle = {
        marginTop: 30
    }

    const introStyle = {
        fontSize: 18,
        fontFamily: "sans-serif",
        color: "#212121"+66,
        textTransform: "none"

    }

    // use RETURN function for unmount only
    useEffect(() => {
        return () => {
        }
    }, [])

    return (
        <li style={liStyle}>
            <img src={preview_image} width="200" height="200" />
            <br />
            <div style={titleStyle}>{title}</div>
            <br />
            <div style={introStyle}>{intro}</div>
        </li>
    )
}

export default PortfolioItem