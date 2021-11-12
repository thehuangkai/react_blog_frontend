import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {

    const links = [
        {
            id: 1,
            path: "/",
            text: "Home",
        },
        {
            id: 2,
            path: "/resume",
            text: "Resume",
        },
        {
            id: 3,
            path: "/about",
            text: "About",
        },
        {
            id: 4,
            path: "/contact",
            text: "Contact",
        },
    ]

    return (
        <header className="header">
            <div className="left">
                <Link to="/">Huang Kai</Link>
            </div>
            <div className="right">

                <ul>
                    {links.map(link => {
                        return (
                            <li key={link.id}>
                                <NavLink
                                    to={link.path}
                                    activeClassName="active-link"
                                    exact
                                >
                                    {link.text}
                                </NavLink>
                            </li>
                        )
                    })}
                </ul>

            </div>
        </header>
    )
}

export default NavBar

