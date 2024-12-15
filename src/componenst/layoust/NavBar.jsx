import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import CartWidget from "../common/CartWidget";



export const NavBar = () => {
  return (
    <div className="nav">
      <h1>Amelia Tejidos</h1>

      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/categoria/gorro">Gorros</Link>  
        </li>
        <li>
          <Link to="/categoria/saco">Sacos</Link>  
        </li>
        <li>
          <Link to="/categoria/sueter">Sueter</Link> 
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};
