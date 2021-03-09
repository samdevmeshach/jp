import React from 'react'
import Menu from './core/Menu'
import Layout from './core/Layout'
import Content from './core/Content'
import Sector from './core/Sector'
import Investing from './core/Investing'
import Hotel from './core/Hotel'
import Teams from './core/Teams'
import Contactus from './core/Contactus'
import Footer from './core/Footer'
export default function Home() {
    return (
        <div>
            <Menu />
            <Layout />
            <Content />
            <Sector />
            <Investing />
            <Hotel />
            <Teams />
            <Contactus />
            <Footer />
        </div>
    )
}
