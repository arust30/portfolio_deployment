import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Education from './components/education/Education'
import Events from './components/events/Events'
import Skills from './components/skills/Skills'
import More from './components/more/More'

const App = () => {
  return (
    <>
    <Header />
    <Nav />
    <Education />
    <Experience />
    <Skills />
    <Testimonials />
    <Events />
    <Contact />
    <More />
    <Footer />
    <About />
    <Services />
    </>
  )
}

export default App