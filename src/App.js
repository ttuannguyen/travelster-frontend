// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Form from "./components/Form";
import { useEffect, useState } from "react";

const App = () => {

  const [activities, setActivities] = useState([]);
  const [quote, setQuote] = useState([]);

  const url = 'http://localhost:3001/data';
  
  
  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
      //console.log(data)
      setActivities(data)}    
    )
    fetch('https://www.boredapi.com/api/activity/')
    .then(res => res.json())
    .then(json => {
      //console.log(json)
      setQuote(json)
    })
  }, [])

  const addActivity = (newActivity) => {
    //console.log(newActivity)
    setActivities(activities => [...activities, newActivity])
  }

  const handleUpdateLikes = (updatedLikes) => {
    //console.log(updatedLikes)
    const activitiesWithUpdatedLikes = activities.map(activity => {
      return activity.id === updatedLikes.id ? updatedLikes : activity
    });
    setActivities(activitiesWithUpdatedLikes)
  }

  return (
    <Router>
        <h1>Travelster</h1>
      <Navbar />
      <Routes>
        <Route exact path="/" element={ <Home quote={quote} />} />
        <Route exact path="/activities" element={ <Activities activities={activities} handleUpdateLikes={handleUpdateLikes}/>} />
        <Route exact path="/activities/new" element={ <Form addActivity={addActivity} />} />
        {/* <Route path="/activities/:id" element={ <Activities activities={activities} />} /> */}
      </Routes>
    </Router>

  );
}


export default App;
