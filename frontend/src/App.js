import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Artist from "./Artist";
import Home from "./Home"
import Product from "./Product"


function App() {
  return (
    <div>
      <BrowserRouter>
      <Router>
<<<<<<< Updated upstream
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="art" element={<Artist />} />
        </Routes>
=======
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
      </Routes>
>>>>>>> Stashed changes
      </Router>
      </BrowserRouter>

    </div>
  )
}

const appdiv = document.getElementById("app")
render(<App />, appdiv);
export default App
