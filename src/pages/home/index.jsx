import React, { useEffect, useState } from 'react'
import SmoothScroll from 'smooth-scroll'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Testimonials from './sections/Testimonials'
const Home = () => {
    useEffect(() => {
        const scroll = new SmoothScroll('a[href*="#"]', {
            speed: 500,
            speedAsDuration: true
        });
    }, []);
  return (
    <div>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default Home