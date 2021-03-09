import React from 'react'
import chair from '../assets/images/chair.png'
import lib from '../assets/images/lib.jpg'
import hotel from '../assets/images/hotel.jpg'
export default function Hotel3() {
    return (
        <>
            <div class="w3-container container1" id="hotels">
                <div className="w3-small w3-text-white container">
                    <div className="hotelcontent">
                        <h6 >HOTELS</h6>
                        <h2>Aenean pulvinar lectus ut nibh</h2>
                    </div>
                </div>
                <div className="r1 w3-container container2">
                    <div className="c1">
                        <img src={chair} width="270px" height="200px" alt="" />
                        <div className="imgtxt">BERLIN, GERMANY</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                    <div className="c1">
                        <img src={hotel} width="270px" height="200px" alt=""/>
                        <div className="imgtxt">SAO PAUL, BRAZIL</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                    <div className="c1">
                        <img src={lib} width="270px" height="200px" alt=""/>
                        <div className="imgtxt">LOS ANGELES CA, USA</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                </div>
                <div className="r1 w3-container container2">
                    <div className="c1">
                        <img src={chair} width="270px" height="200px" alt="" />
                        <div className="imgtxt">BERLIN, GERMANY</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                    <div className="c1">
                        <img src={hotel} width="270px" height="200px" alt=""/>
                        <div className="imgtxt">SAO PAUL, BRAZIL</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                    <div className="c1">
                        <img src={lib} width="270px" height="200px" alt=""/>
                        <div className="imgtxt">LOS ANGELES CA, USA</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                </div>
                <div className="r1 w3-container container2">
                    <div className="c1">
                        <img src={chair} width="270px" height="200px" alt="" />
                        <div className="imgtxt">BERLIN, GERMANY</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                    <div className="c1">
                        <img src={hotel} width="270px" height="200px" alt=""/>
                        <div className="imgtxt">SAO PAUL, BRAZIL</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                    <div className="c1">
                        <img src={lib} width="270px" height="200px" alt=""/>
                        <div className="imgtxt">LOS ANGELES CA, USA</div>
                        <div className="imgpara">Triton to sell DSI Underground to Sanddvik</div>
                    </div>
                <button className="btn btn1">More &#62;</button>
                </div>
            </div>
        </>
    )
}
