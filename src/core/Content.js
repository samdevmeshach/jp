import React from 'react'
import wp2 from '../wp2.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
const Content = () => {
    return (
        <>
            <div class="w3-container w3-padding-32 w3-blue w3-opacity-min" id="projects">
                <div className="w3-small w3-display-center w3-text-white" style={{padding:"10%"}}>
                    <div>
                        <div style={{marginLeft:"20px"}}>
                            <p style={{textAlign:"center",letterSpacing:"2px"}}>UBER UNS</p>
                            <p style={{fontSize:"20px",textAlign:"center"}}>
                               Ein hinsichtlich GroBe der  Hotels
                            </p>
                            <div style={{marginTop:"2%",textAlign:"center"}}>
                                A paragraph is a self-contained unit of discourse in<br/> writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{position:"relative",float:"left"}}>
                    <div class="w3-display-container">
                        <img src={wp2} alt="House" style={{width:"80%"}} />
                    </div>
                </div>
                <div style={{marginTop:"5%"}}>
                   <h4>
                       Um die Wirtschaftlichkeit von Hotels
                   </h4>
                   <p style={{marginTop:"2%",textAlign:"justify"}}>
                   A paragraph is a self-contained unit of discourse in<br/> writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                   </p>
                   <a href="#contact" className="w3-bar-item btn w3-text-light-grey" style={{backgroundColor:"blue",marginTop:"3%"}}><span style={{padding:"0px 2px",backgroundColor:"white",color:"black",marginRight:"10px",borderRadius:"2px"}}><BsArrowRightShort /></span>Members Login</a>
                </div>
            </div>
        </>
        
    )
}

export default Content