import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <div id="nav-bar">
          <NavLink className="navlink" style={{ marginRight: "20px"}} to="/"> Home </NavLink>
          <NavLink className="navlink" style={{ marginRight: "20px"}} to="/activities"> Activities </NavLink>
          <NavLink className="navlink" style={{ marginRight: "20px"}} to="/activities/new"> Add a new activity! </NavLink>
      </div>
  )
}

export default Navbar