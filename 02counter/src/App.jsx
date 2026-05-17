import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

 let [counter, setCounter] = useState(15)  //this hook is responsible for change the state //not change of value but propagate under ui or dom

 // let counter = 15//to change value use let

  const  addValue =()=>{
   //console.log("Clicked",  counter);
   // counter = counter + 1
  setCounter(counter + 1 )
    
  }
  const removeValue =()=>{
    setCounter(counter - 1)
  }

  return (
     <>
       <h1> Coffee and React</h1>
       <h2>Counter value:{counter} </h2>

       <button
       onClick = {addValue}
       >Add value{counter}</button>
       <br />
       <button
       onClick = {removeValue}>remove value{counter}</button>
       <p>footer:{counter}</p>
     </>
  )
}

export default App
