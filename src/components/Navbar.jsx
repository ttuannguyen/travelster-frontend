import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
      <div>
          <NavLink style={{ marginRight: "20px" }} to="/"> Home </NavLink>
          <NavLink style={{ marginRight: "20px" }} to="/activities"> Activities </NavLink>
          <NavLink style={{ marginRight: "20px" }} to="/activities/new"> Add a new activity! </NavLink>
      </div>
  )
}

export default Navbar