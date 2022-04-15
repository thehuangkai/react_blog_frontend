import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faGithub,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer-pin">
            <a href="https://www.linkedin.com/in/huangkai0705/"
                className="linkedin social">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://www.facebook.com/huang.kai.3994"
                className="facebook social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://github.com/thehuangkai"
                className="github social">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
        
            <h6>2022. All rights reserved. Made from tinkering with AWS, Django and Reactjs.</h6>
        </footer>
    )
}

export default Footer