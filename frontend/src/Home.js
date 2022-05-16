import React from 'react'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Content1 from './components/Content1'
import Feature from './components/Feature'
import Marketing from './components/MarketingSection'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
      <Navbar/>
      <Landing/>
      <Content1/>
      <Feature/>
      <Marketing/>
      <Contact/>
      <Footer/>
    </div>
  )
}



export default Home