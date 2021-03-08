import React from 'react'
import '../assets/css/main.css'
import {ImEarth} from 'react-icons/im'
import {FaHandsHelping} from 'react-icons/fa'
import {RiMoneyDollarCircleLine} from 'react-icons/ri'
import {AiOutlinePercentage} from 'react-icons/ai'
const Sector = () => {
    return (
        <>
            <div class="w3-container  heading" id="projects">
                <div className="w3-small w3-text-white container">
                    <div>
                        <h6>SECTOR</h6>
                        <h3>Ein hinsichtlich GroBe der  Hotels</h3>
                        <div>
                            A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                        </div>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col">
                                <ImEarth color="rgba(95, 74, 12, 0.692)" size="40" />
                                <div className="boxcontent">
                                    A paragraph is a self-contained unit of discourse in
                                </div>
                            </div>
                            <div className="col">
                                <AiOutlinePercentage color="rgba(95, 74, 12, 0.692)" size="40" />
                                <div className="boxcontent">
                                    A paragraph is a self-contained unit of discourse in
                                </div>
                            </div>
                            <div className="col">
                                <FaHandsHelping color="rgba(95, 74, 12, 0.692)" size="40" />
                                <div className="boxcontent">
                                    A paragraph is a self-contained unit of discourse in
                                </div>
                            </div>
                            <div className="col">
                                <RiMoneyDollarCircleLine color="rgba(95, 74, 12, 0.692)" size="40" />
                                <div className="boxcontent">
                                    A paragraph is a self-contained unit of discourse in
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sector
