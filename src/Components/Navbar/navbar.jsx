import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/Images/logo.png'
import './navbar.css';
function Navbar() {
    return (
        <div className="d-flex justify-content-evenly align-items-center py-3">
            <div className="logos d-flex justify-content-center">
            <img className='logo mx-3' src={logo} alt="logo" />
            <img className='logo mx-3' src={logo} alt="logo" />
            <img className='logo mx-3' src={logo} alt="logo" />
            </div>

        <div className='navBar'>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/activities">Activities</NavLink>
                <NavLink to="/events">Events</NavLink>
                <NavLink to="/members">Members</NavLink>
                <NavLink to="/contact">Contact Us</NavLink>
        </div>
        <div className="justify-content-center">
        <button className='donate p-1'>Donate</button>
        </div>
        </div>
    );
}

export default Navbar;
