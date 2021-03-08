import React from 'react'
import wp1 from '../assets/images/wp1.jpg'
import '../assets/css/main.css'
const Layout = () => {
    return (
        <>
            <header className="w3-display-container w3-content" style={{maxWidth:"1500px"}} id="home">
            <img className="w3-image" src={wp1} alt="Architecture" width="100%" height="100%" />
            <div className="w3-display-left box">
                <div className="w3-text-white w3-blue w3-opacity-min box1">
                    <div style={{borderLeft:"3px solid white"}}>
                        <div style={{marginLeft:"20px"}}>
                            <span>JPI HOPITALITY INVASTORS CLUB</span>
                            <h3>Heading Here</h3>
                            <div className="content">
                                A paragraph is a self-contained unit of discourse in<br/> writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </>
    )
}

export default Layout;