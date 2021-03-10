import React from 'react'
import img1 from '../assets/images/chair.png'
import img2 from '../assets/images/hotel.jpg'
import img3 from '../assets/images/wp1.jpg'
import img4 from '../assets/images/wp2.jpg'
import img5 from '../assets/images/lib.jpg'
export default function Hotelcollapse() {
    return (
        <>
            <>
            <div class="w3-container container1 bg" id="hotels">
                <div className="w3-small w3-text-white">
                    <div className="hideimg">
                        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={img1} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={img2} className="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src={img3} className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"  data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                        </div>
                    </div>
                    <div className="hotelcontent">
                        <div className="r3">
                            <div className="c3">
                                <div className="left">
                                    <div className="hotel">HOTEL</div>
                                    <h3>25Hours Wien beim<br /> MuseumsQuartier</h3>
                                    <h5>Loaction</h5>
                                    <p>LerchenfelderstraBe 1-3 1070 Wien,Osterreich</p>
                                    <h5>Investoe</h5>
                                    <p>JP immobiliengruppe und Partner</p>
                                    <h5>Consultants</h5>
                                    <p>PKF Hospitalexperts</p>
                                    <h5>Operator</h5>
                                    <p>25Hours Hospital Company Wien beim</p>
                                    <h5>Keys/Zimmer</h5>
                                    <p>221</p>
                                </div>
                            </div>
                            <div className="c3 showimg">
                                <img src={img1} alt="" width="300px" height="200px"  />
                                <img src={img2} alt="" width="300px" height="200px"  />
                                <img src={img3} alt="" width="400px" height="300px"  />
                                <img src={img4} alt="" width="200px" height="300px"  />
                                <img src={img5} alt="" width="200px" height="300px"  />
                                <img src={img1} alt="" width="400px" height="300px"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
        </>
    )
}
