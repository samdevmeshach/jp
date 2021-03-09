import React from 'react'
import { Link } from 'react-router-dom';
import {BsArrowRightShort} from 'react-icons/bs'
import '../assets/css/main.css'
const Menu = () => {

    return (
        <div className="w3-top bg">
            <div className="w3-bar w3-wide w3-padding w3-card"> 
                <Link to="/">
                    <a href="#home" className="w3-bar-item w3-text-light-grey nav"><b className="w3-padding w3-opacity-min logo">JP</b>JPI HOPITALITY INVASTORS CLUB</a>
                </Link>
                <div className="w3-right w3-hide-medium nav">
                <Link to="/Hotel">
                    <a href="#projects" className="w3-text-light-grey">Hotel</a>
                </Link>
                <Link to="/teams">
                    <a href="#about" className="w3-text-light-grey">Teams</a>
                </Link>
                <Link to="/contactus">
                    <a href="#about" className="w3-text-light-grey">Contacts</a>
                </Link>
                    <a href="#contact" className="w3-text-light-grey en" >EN</a>
                    <a href="#contact" className="btn w3-text-light-grey"><span className="arrow"><BsArrowRightShort /></span>Members Login</a>
                </div>
            </div>
        </div>
      );
}

export default Menu;