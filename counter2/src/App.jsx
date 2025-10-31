import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,changestate]=useState(0);
 
 const add=()=>{
   if(counter<20){
    counter++;
    changestate(counter);
    console.log(counter);
   }
 }
  const sub=()=>{
    if(counter>0){
    counter--;
    changestate(counter);
    console.log(counter);
    }
 }


  return (
    <>
    <h1>COUNTER APP</h1>
    <h2>COUNT : {counter}</h2>
    <button onClick={add}>add</button>
    <br></br>
    <br></br>
    <button onClick={sub}>sub</button>

    </>
  )
}

export default App
