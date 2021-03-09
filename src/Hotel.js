import React from 'react'
import Menu from './core/Menu'
import Layout from './core/Layout'
import Hotel from './core/Hotel3'
import Contactus from './core/Contactus'
import Footer from './core/Footer'
export default function HotelPage() {
    return (
        <div>
            <Menu />
            <Layout />
            <Hotel />
            <Contactus />
            <Footer />
        </div>
    )
}
