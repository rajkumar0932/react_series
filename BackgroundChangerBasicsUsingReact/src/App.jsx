import { useState } from 'react'
import './App.css'

function App() {
  function action(color){
    function action2(){
      document.body.style.backgroundColor = color;
    }
    return action2;
  }

  return (
    <>
      <h1 className="title">Background Color Changer</h1>
      <div className="button">

        <button onClick={action("red")}>Red</button>
        <button onClick={action("yellow")}>Yellow</button>
        <button onClick={action("green")}>Green</button>
        <button onClick={action("blue")}>Blue</button>
        <button onClick={action("pink")}>Pink</button>
        <button onClick={action("olive")}>Olive</button>
        <button onClick={action("beige")}>Beige</button>
        <button onClick={action("teal")}>Teal</button>
        <button onClick={action("maroon")}>Maroon</button>
        <button onClick={action("brown")}>Brown</button>

      </div>
    </>
  )
}

export default App
