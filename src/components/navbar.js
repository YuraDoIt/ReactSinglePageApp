import React from "react";

const NavBar = (props) => (
    <nav>
        <h2 class="logo"><a class="logo-link" href='#'> {props.title}  </a></h2>
        <ul class="nav-menu">
            <li><a className="nav-menu-link" href='#'>Home</a></li>
            <li><a className="nav-menu-link" href='#'>Best film</a></li>
            <li><a className="nav-menu-link" href='#'>Best actors</a></li>
            <li><a className="nav-menu-link" href='#'>Best of the best</a></li>
        </ul>
    </nav>
)

export default NavBar;  