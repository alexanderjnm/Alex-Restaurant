import React from "react";
import { Link } from "react-router-dom";
import classes from './navbar.module.css';



function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/reserva">Reservation</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;