import React from 'react'
import team1 from '../assets/images/team1.jpg'
import team2 from '../assets/images/team2.jpg'
import team3 from '../assets/images/team3.jpg'
export default function Teams() {
    return (
            <>
            <div class="w3-container w3-blue w3-opacity-min container1" id="hotels">
                <div className="w3-small w3-text-white container">
                    <div className="hotelcontent">
                        <h6 >TEAM</h6>
                        <h2>Aenean pulvinar lectus ut nibh</h2>
                    </div>
                </div>
                <div className="r1 w3-container container2">
                    <div className="c1">
                        <img src={team1} width="250px" height="200px" alt="" />
                        <div>DANIEL JELITZKA</div>
                        <li>
                            <span>Executive Partner</span>
                        </li>
                        <li>
                            <span>set uber 25 Jahren erfolgreich am Immobilienmarkt tatig</span>
                        </li>
                        <li>
                            <span>450 projekte im In-& Ausland entwickelt</span>
                        </li>
                        <li>
                            <span>einer der graBten privaren Immobeilleen entwickler Osterreichs</span>
                        </li>
                        <li>
                            <span>8 hotels im Eigentum der Imobilien gruppe(u.a The Guesthouse 25hours Hotel Msueymsquartire Wien)</span>
                        </li>
                    </div>
                    <div className="c1">
                        <img src={team2} width="250px" height="200px" alt=""/>
                        <div>LUKAS EULER-ROLLE</div>
                        <li>
                            <span>Executive Partner</span>
                        </li>
                        <li>
                            <span>set uber 25 Jahren erfolgreich am Immobilienmarkt tatig</span>
                        </li>
                        <li>
                            <span>450 projekte im In-& Ausland entwickelt</span>
                        </li>
                        <li>
                            <span>einer der graBten privaren Immobeilleen entwickler Osterreichs</span>
                        </li>
                        <li>
                            <span>8 hotels im Eigentum der Imobilien gruppe(u.a The Guesthouse 25hours Hotel Msueymsquartire Wien)</span>
                        </li>
                    </div>
                    <div className="c1">
                        <img src={team3} width="250px" height="200px" alt=""/>
                        <div>GEBHARD SCHACHERMAYER</div>
                        <li>
                            <span>Executive Partner</span>
                        </li>
                        <li>
                            <span>set uber 25 Jahren erfolgreich am Immobilienmarkt tatig</span>
                        </li>
                        <li>
                            <span>450 projekte im In-& Ausland entwickelt</span>
                        </li>
                        <li>
                            <span>einer der graBten privaren Immobeilleen entwickler Osterreichs</span>
                        </li>
                        <li>
                            <span>8 hotels im Eigentum der Imobilien gruppe(u.a The Guesthouse 25hours Hotel Msueymsquartire Wien)</span>
                        </li>
                    </div>
                </div>
                <button className="teambtn">Team &#62;</button>
            </div>
        </>
    )
}
