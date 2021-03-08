import React from 'react'
import '../assets/css/main.css'
import wp2 from '../assets/images/wp2.jpg'
const Investing = () => {
    return (
        <>
            <div class="w3-container container1" id="projects">
                <div className="w3-small w3-text-white container">
                    <div>
                        <h1>''</h1>
                        <h6 >INVESTING</h6>
                        <div className="para">
                            A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                        </div>
                        <div className="author">-DANIEL JELITZKA</div>
                    </div>
                    <div className="w3-large pad">
                        Hotel portfolio that includes different sizes of hotel and stardless a range of customers segments not only equates to a risk-averse investment startegy but also paves the way for an optimal exit.
                    </div>
                    <div>
                    <table class="table table-primary table-borderless">
                    <tbody>
                        <tr>
                            <td>ANZAHAL DER ZIMMER <span>NUMBER OF ROOMS</span></td>
                            <td>90-180 <span>CITY</span> / 90-180 <span>CITY</span></td>
                        </tr>
                        <tr>
                            <td>GESAMTINVESTITIONSVOLUMEN <span>INKL. TOTAL INVESTEMENT SIZE (INCL CAPEX</span></td>
                            <td>&euro; 10,000,000 - &euro; 40,000,000</td>
                        </tr>
                        <tr>
                            <td>HOTEL-STATUS <span>HOTEL-STATUS</span></td>
                            <td>BESTEHENDE IMMOBILIEN <span>EXISTING PROPERTIES</span></td>
                        </tr>
                        <tr>
                            <td>SEGMENT <span>SEGMENT</span></td>
                            <td>FREIZEIT & BUSINESS <span>LEIURE &</span></td>
                        </tr>
                        <tr>
                            <td>WAHRUNG <span>CURRENCY</span></td>
                            <td>EURO &euro;</td>
                        </tr>
                        <tr>
                            <td>INVESTITIONSAUSGABEN <span>CAPEX CAP</span></td>
                            <td>IDR. 50 % DES ANSCHAFFUNGSWERTES <span>AS A RULE 50% OF ACQUASITION VALUE</span></td>
                        </tr>
                      </tbody>
                    </table>
                    </div>
                </div>
            </div>
            <div class="w3-container w3-opacity-min imgcontainer" id="projects">
                <div className="image">
                    <div class="w3-display-container">
                        <img src={wp2} alt="House" width="100%" />
                    </div>
                </div>
                <div className="imgcontent">
                   <div className="head2">
                       Um die Wirtschaftlichkeit von Hotels
                   </div>
                   <p>
                    A paragraph is a self-contained unit of discourse in<br/> writing dealing with a particular point or idea.<br/> A paragraph consists of one or more sentences.
                   </p>
                </div>
            </div>
        </>
    )
}

export default Investing
