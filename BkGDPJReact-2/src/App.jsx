import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

    document.body.style.backgroundColor=color;

  

  
  return (
    <>
     <h1 className="title">Background Color Changer</h1>
      <div className="button">

        <button onClick={()=>{setColor("red")}}>Red</button>
        <button onClick={()=>{setColor("yellow")}}>Yellow</button>
        <button onClick={()=>{setColor("green")}}>Green</button>
      

      </div>
     
    </>
  )
}

export default App
