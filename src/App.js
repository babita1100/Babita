import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupLogin from './components/SignupLogin';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupLogin />} />
          <Route path="/home" element={<Home />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;