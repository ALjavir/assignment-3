import React, { useState } from 'react';
import "./topNavBar-style.css"
import logoImg from "~/assets/image/logo.png"

import { NavLink } from 'react-router/internal/react-server-client';



export default function TopNavBar() {

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About US", path: "/About-US" },
        { name: "Our App", path: "/Our-App" },
        { name: "Contacts", path: "/Contacts" },
    ];

    return (
        <header id="top-nav-bar" className="top-nav-bar">

            <img
                className="logo"
                src={logoImg}
                alt="Pixelab"
            />

            <nav className="nav-menu">
                {navItems.map((item) => (
                    <NavLink
                        key={item.name}
                        to={item.path}
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : ""}`
                        }
                    >
                        {item.name}
                    </NavLink>
                ))}
            </nav>

            <div className="nav-actions">
                <a className="log-in-btn" href="">
                    Log in
                </a>

                <a className="sign-up-btn" href="">
                    Sign up
                </a>
            </div>

        </header>
    );
}