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


function App() {
  return (
    <div>
      <BrowserRouter>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="art" element={<Artist />} />
        </Routes>
      </Router>
      </BrowserRouter>

    </div>
  )
}

const appdiv = document.getElementById("app")
render(<App />, appdiv);
export default App
