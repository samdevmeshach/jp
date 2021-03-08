import React from 'react'
import wp2 from '../assets/images/wp2.jpg'
import {BsArrowRightShort} from 'react-icons/bs'
import '../assets/css/main.css'
const Content = () => {
    return (
        <>
            <div class="w3-container w3-padding-32 w3-blue w3-opacity-min" id="projects">
                <div className="w3-small w3-display-center w3-text-white">
                    <div>
                        <div>
                            <p>UBER UNS</p>
                            <h3 className="head1">
                               Ein hinsichtlich GroBe der  Hotels
                            </h3>
                            <p>
                                A paragraph is a self-contained unit of discourse in<br/> writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="image">
                    <div class="w3-display-container">
                        <img src={wp2} alt="House" width="80%" />
                    </div>
                </div>
                <div className="imgcontent">
                   <h4>
                       Um die Wirtschaftlichkeit von Hotels
                   </h4>
                   <p>
                   A paragraph is a self-contained unit of discourse in<br/> writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                   </p>
                   <a href="#contact" className="w3-bar-item btn w3-text-light-grey"><span className="arrow"><BsArrowRightShort /></span>Members Login</a>
                </div>
            </div>
        </>
    )
}

export default Content