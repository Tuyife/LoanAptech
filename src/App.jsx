import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import privacy from './components/Privacy';
import PrivacyPolicy from './components/Privacy';
function App() {
  return (
    <div className="App">
      <About />
      <PrivacyPolicy/>
      <Footer/>
    
    </div>
  );
}


export default App;