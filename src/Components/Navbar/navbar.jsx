import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Images/logo.png'
import './navbar.css';
function Navbar() {
    return (
        <div className="d-flex justify-content-evenly">
            <div className="logos d-flex justify-content-center gap-1">
            <img className='logo' src={logo} alt="logo" />
            <img className='logo' src={logo} alt="logo" />
            <img className='logo' src={logo} alt="logo" />
            </div>

        <div className='navBar'>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/activities">Activities</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/members">Members</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="justify-content-center">
        <button>Donate</button>
        </div>
        </div>
    );
}

export default Navbar;
