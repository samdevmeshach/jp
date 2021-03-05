import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs'
const Menu = () => {

    return (
        <div className="w3-top">
            <div className="w3-bar w3-wide w3-padding w3-card" style={{backgroundColor:"#709fb0"}}>
                <a href="#home" className="w3-bar-item w3-text-light-grey" style={{textDecoration:"none"}}><b className="w3-padding w3-opacity-min" style={{marginRight:"20px",backgroundColor:"blue"}}>JP</b>JPI HOPITALITY INVASTORS CLUB</a>
                <div className="w3-right w3-hide-medium">
                    <a href="#projects" className="w3-bar-item w3-text-light-grey" style={{textDecoration:"none"}}>Projects</a>
                    <a href="#about" className="w3-bar-item w3-text-light-grey" style={{textDecoration:"none"}}>About</a>
                    <a href="#contact" className="w3-bar-item w3-text-light-grey" style={{textDecoration:"none",border:"1px solid white",padding:"1px 8px",marginTop:"5px",marginRight:"10px"}}>EN</a>
                    <a href="#contact" className="w3-bar-item btn w3-text-light-grey" style={{backgroundColor:"blue"}}><span style={{padding:"0px 2px",backgroundColor:"white",color:"black",marginRight:"10px",borderRadius:"2px"}}><BsArrowRightShort /></span>Members Login</a>
                </div>
            </div>
        </div>
      );
}

export default Menu;