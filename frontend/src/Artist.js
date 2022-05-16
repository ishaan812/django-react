import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import './index.css';
function Artist() {
  return (
      <div>
          <Navbar/>
    <div className='card'>
        <Card/>
    </div>
    </div>
  )
}



export default Artist