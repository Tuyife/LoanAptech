import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import About from './components/About';
import Privacy from './components/Privacy';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Terms from './components/Terms';
import Faq from './components/Faq';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>


        <Footer />
      </div>
    </Router>
  );
}

export default App;