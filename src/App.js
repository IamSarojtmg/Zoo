import React from "react";
import Primate from "./Components/Primate";
// Here the whole js file that contains the function component is being imported and being added in the App.
import Header from "./Components/Header";
import Feline from './Components/Feline';
import Caninae from './Components/Caninae';
import Addnew from './Components/Addnew';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css"

function App() {
  return(
  <Router>
    <nav className="container">
      <p1>Z<span>OO</span></p1>
      <Link to="/">All</Link>
      <Link to="/primate">Primate</Link>
      <Link to="/Feline">Feline</Link>
      <Link to="/Caninae">Caninae</Link>
      <Link to="/Addnew">Addnew</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Header/>}/>
      <Route path="/primate" element={<Primate/>}/>
      <Route path="/Feline" element={<Feline/>}/>
      <Route path="/Caninae" element={<Caninae/>}/>
      <Route path="/Addnew" element={<Addnew/>}/>
      
    </Routes>
  </Router> 
  )
}

export default App;


