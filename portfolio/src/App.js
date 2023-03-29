import React from "react";
import { Route, Routes } from "react-router-dom"
import About from './pages/About'
import Contact from './pages/Contact'
import Work from './pages/Work'


function App() {
  return (
    <>
    
      <div className="container">
        <Routes>
          <Route path="/" element={<About />}></Route>
          <Route path="/work" element={<Work />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
