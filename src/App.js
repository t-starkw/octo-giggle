import React from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'
import Navbar from './components/nav';

function App() {
    return (
        <div className="App">

            <div className="absolute w-full right-0 top-0">
                <Navbar />
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={<About />}></Route>
                    <Route path="/work" element={<Work />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </div>

        </div>
    );
}

export default App;
