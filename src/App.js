import { Routes, Route } from "react-router-dom"
import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Program from './Components/Program';
import Offer from './Components/Offer';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
    return (
        <>
        <Navbar />
        <div className='App'>
            <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Offer' element={<Offer/>}/>
            <Route path='/Program' element={<Program/>}/>
            </Routes>
        </div>
        </>
    );
}

export default App;


