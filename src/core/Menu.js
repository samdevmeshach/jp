import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
import '../assets/css/main.css'
const Menu = () => {

    return (
        <div className="w3-top bg">
            <div className="w3-bar w3-wide w3-padding w3-card"> 
                <a href="#home" className="w3-bar-item w3-text-light-grey nav"><b className="w3-padding w3-opacity-min logo">JP</b>JPI HOPITALITY INVASTORS CLUB</a>
                <div className="w3-right w3-hide-medium nav">
                    <a href="#projects" className="w3-text-light-grey">Hotel</a>
                    <a href="#about" className="w3-text-light-grey">Teams</a>
                    <a href="#about" className="w3-text-light-grey">Contacts</a>
                    <a href="#contact" className="w3-text-light-grey en" >EN</a>
                    <a href="#contact" className="btn w3-text-light-grey"><span className="arrow"><BsArrowRightShort /></span>Members Login</a>
                </div>
            </div>
        </div>
      );
}

export default Menu;