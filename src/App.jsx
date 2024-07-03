import { useState } from 'react'
import './App.css'
import { FaBeer } from "react-icons/fa";
import Navbar from './Component/Navbar/Navbar';
import Coversection from './Component/Coversection/Coversection';
import Recipes from './Component/Coversection/Recipes';

function App() {
 
  return (
    <>
      
      <div>
         <Navbar></Navbar>
         <Coversection></Coversection>
         <Recipes></Recipes>
      </div>
     
    </>
  )
}

export default App
