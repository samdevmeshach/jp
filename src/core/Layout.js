import React from 'react'
import wp1 from '../wp1.jpg'
const Layout = () => {
    return (
        <>
            <header className="w3-display-container w3-content w3-wide" style={{maxWidth:"1500px"}} id="home">
            <img className="w3-image" src={wp1} alt="Architecture" width="1500" height="800" />
            <div className="w3-display-left" style={{marginLeft:"10%",position:"absolute",top:"50%"}}>
                <div className="w3-small w3-text-white w3-blue w3-opacity-min" style={{padding:"10%"}}>
                    <div style={{borderLeft:"3px solid white"}}>
                        <div style={{marginLeft:"20px"}}>
                            <span>JPI HOPITALITY INVASTORS CLUB</span>
                            <h3>Heading Here</h3>
                            <div style={{marginTop:"10%"}}>
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