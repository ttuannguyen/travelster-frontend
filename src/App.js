// import logo from './logo.svg';
// import './App.css';
//import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Form from "./components/Form";
import { useEffect, useState } from "react";

const App = () => {

  const [activities, setActivities] = useState([]);
  const [quote, setQuote] = useState([]);

  const url = 'http://localhost:3000/data';
  
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      {setActivities(data)}}   
  )}, [])

  // useEffect(() => {
  //   fetch('https://www.boredapi.com/api/activity/')
  //   .then(res => res.json())
  //   .then(json => {
  //     console.log(json)
  //     setQuote(json)
  //   })
  // }, [])



  const addActivity = (newActivity) => {
    //console.log(newActivity)
    setActivities(activities => [...activities, newActivity])
  }

  return (
    <Router>
      <h1>Travel Planning App</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home quote={quote} />} />
        <Route exact path="/activities" element={ <Activities activities={activities} />} />
        <Route exact path="/activities/new" element={ <Form addActivity={addActivity} />} />
      </Routes>
    </Router>

  );
}

export default App;
