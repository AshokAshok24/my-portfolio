import React, { useEffect, useState } from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './Header';
import About from './About';
import Facts from './Facts';
import Skills from './Skills';
import Resume from './Resume';
import Portfolio from './Portfolio';
import Services from './Services';
import Testimonial from './Testimonial';
import Contactus from './Contactus';
import Hero from './Hero';
require("aos/dist/aos.js");


const HomeContainer = ({ children }) => {


    useEffect(() => {
        AOS.init();
    }, [])


    return (
        <React.Fragment>

            <div>

                <Header />

                <Hero />

                <main id="main">

                    {children}

                    <About />

                    <Facts />

                    <Skills />

                    <Resume />

                    <Portfolio />

                    <Services />

                    <Testimonial />
                    
                    <Contactus />

                </main>



            </div>
        </React.Fragment>
    )
}

export default HomeContainer