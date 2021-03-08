import React from 'react'
import chair from '../assets/images/chair.png'
import lib from '../assets/images/lib.jpg'
import hotel from '../assets/images/hotel.jpg'
export default function Hotel() {
    return (
        <>
            <div class="w3-container container1" id="hotels">
                <div className="w3-small w3-text-white container">
                    <div className="hotelcontent">
                        <button className="btn btn1">Load all Projects &#62;</button>
                        <h6 >HOTELS</h6>
                        <h2>Aenean pulvinar lectus ut nibh</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <img src={chair} width="250px" height="200px" alt="" />
                    </div>
                    <div className="col">
                        <img src={hotel} width="250px" height="200px" alt=""/>
                    </div>
                    <div className="col">
                        <img src={lib} width="250px" height="200px" alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}
