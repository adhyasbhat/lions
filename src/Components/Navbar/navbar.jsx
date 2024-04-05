import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
function Navbar() {
    return (
        <div className='navBar'>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/activities">Activities</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/gallery">Gallery</NavLink>
                <NavLink to="/members">Members</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
          
        </div>
    );
}

export default Navbar;
