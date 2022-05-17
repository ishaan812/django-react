import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Artist from "./Artist";
import Home from "./Home"
import Product from "./Product"


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/artist" element={<Artist />} />
      </Routes>
      </Router>

    </div>
  )
}

const appdiv = document.getElementById("app")
render(<App />, appdiv);
export default App
