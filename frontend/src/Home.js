import React from 'react'
import Navbar from './Navbar'
import Landing from './Landing'
import Content1 from './Content1'
import Feature from './Feature'
import Marketing from './MarketingSection'
import Contact from './Contact'
import Footer from './Footer'

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