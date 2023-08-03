import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const linkStyles = {
    marginRight: '20px'
  }

  return (
      <div id="nav-bar">
          <NavLink className="navlink" style={linkStyles} to="/"> Home </NavLink>
          <NavLink className="navlink" style={linkStyles} to="/activities"> Activities </NavLink>
          <NavLink className="navlink" style={linkStyles} to="/activities/new"> Add a new activity! </NavLink>
      </div>
  )
}

export default Navbar