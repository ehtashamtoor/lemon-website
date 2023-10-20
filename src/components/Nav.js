import React from "react";
import logo from "../images/lemon_logo.png"

const Nav = () => {
    return(
        <nav>
            <img src={logo} alt="Little Lemon Logo" ></img>
            <ul>
                <li><a href='www.dumylink.com'>Home</a></li>
                <li><a href='www.dumylink.com'>About</a></li>
                <li><a href='www.dumylink.com'>Menu</a></li>
                <li><a href='www.dumylink.com'>Reservations</a></li>
                <li><a href='www.dumylink.com'>Order Online</a></li>
                <li><a href='www.dumylink.com'>Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;