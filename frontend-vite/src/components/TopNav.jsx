import React from "react";
import "./TopNav.css";

function TopNav() {
    return (
        <header className="top-nav">
            <h1 className="logo">Portable Gallery</h1>
            <nav>
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default TopNav;
