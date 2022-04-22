// import logo from './logo.svg';
// import './App.css';
import Home from "./Home";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Activity from "./components/Activity";

const App = () => {
  return (
    <div className="App">
      <h1>My App</h1>
      <Home />
      <Navbar />
      <Activities />
    </div>
  );
}

export default App;
