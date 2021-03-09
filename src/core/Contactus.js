import React from 'react'
import wp2 from '../assets/images/wp2.jpg'
export default function Contactus() {
    return (
        <>
          <div class="w3-container w3-opacity-min imgcontainer1" id="projects">
                <div className="image">
                    <div class="w3-display-container">
                        <img src={wp2} alt="House" width="100%" />
                    </div>
                </div>
                <div className="imgcontent">
                   <div className="contacthead">
                       CONTACT US
                       <h3>GET IN TOUCH</h3>
                       <p className="contactpara">
                            A paragraph is a self-contained unit of discourse in<br/> writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                        </p> 
                        <button>Contact &#62;</button> 
                   </div>
                </div>
            </div>  
        </>
    )
}
