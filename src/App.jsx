import { useState } from 'react'
import './App.css'
import { FaBeer } from "react-icons/fa";
import Navbar from './Component/Navbar/Navbar';
import Coversection from './Component/Coversection/Coversection';

function App() {
 
  return (
    <>
      
      <div>
         <Navbar></Navbar>
         <Coversection></Coversection>
      </div>
     
    </>
  )
}

export default App
