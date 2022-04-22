// import logo from './logo.svg';
// import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Form from "./components/Form";

const App = () => {
  return (
    <Router>
      <h1>Phase 2 Project</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route exact path="/activities" element={ <Activities />} />
        <Route exact path="/activities/new" element={ <Form />} />
      </Routes>
    </Router>

  );
}

export default App;
