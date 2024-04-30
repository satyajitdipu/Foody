import React from 'react';
import { NavLink } from 'react-router-dom';

function Subnav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink exact to="/" className="navbar-brand">All menu</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/BreakFast" className="nav-link">Breakfast</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Lunch" className="nav-link">Lunch</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Dinner" className="nav-link">Dinner</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Burger" className="nav-link">Burger</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Pizzanians" className="nav-link">Pizzanians</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Desserts" className="nav-link">Desserts</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Chick" className="nav-link">Chick</NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Subnav;
