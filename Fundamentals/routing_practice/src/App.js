import logo from './logo.svg';
import './App.css';
import React from "react";
import {BrowserRouter, Routes,Route, Link} from "react-router-dom";
import Home from './components/Home';
import SecondComponent from './components/SecondComponent';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/:word" element={<SecondComponent />} />
          <Route path="/:word/:color/:backgroundCol" element={<SecondComponent />} />
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
