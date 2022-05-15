import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Home"


function App() {
  return (
    <div>
      <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      </Router>
    </div>
  )
}

const appdiv=document.getElementById("app")
render(<App/>,appdiv);
export default App
