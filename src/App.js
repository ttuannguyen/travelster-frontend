// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Form from "./components/Form";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Home />
      <Navbar />
      <Activities />
      <Form />
    </Router>

  );
}

export default App;
