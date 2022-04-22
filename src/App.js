// import logo from './logo.svg';
// import './App.css';
import Home from "./Home";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Form from "./components/Form";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Project 2</h1>
      <Home />
      <Navbar />
      <Activities />
      <Form />
    </div>
  );
}

export default App;
