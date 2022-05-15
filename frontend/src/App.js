import React from 'react'
import { render } from 'react-dom'

function App() {
  return (
    <div>
        <div className="font-bold text-3xl">
          Hello, world! hiiiiiiii
        </div>
    </div>
  )
}

const appdiv=document.getElementById("app")
render(<App/>,appdiv);
export default App
