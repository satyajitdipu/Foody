import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../icons8-savouring-delicious-food-face-50.png';
import cart from '../icons8-shopping-cart-30.png';
import profile from '../icons8-user-30.png';

function Navbar() {
  
  const navigate = useNavigate();
  var login = JSON.parse(localStorage.getItem("userg"));

  

  const handleLogout = () => {
    localStorage.removeItem("userg");
    localStorage.setItem("userstatus",false)
    navigate("/login"); 
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="light"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="javascript:void(0)">

                  Foody
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="Cart">
                    <img src={cart} />
                  </a>
                </li>
              </ul>
            </span>
            <div className="dropdown">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={profile} />
              </button>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="UserDetails">
                    User Details
                  </a>
                </li>
                <a className="dropdown-item" onClick={handleLogout} href="/logout">
                  {login ===null ? "Login" : "Logout"}
                </a>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
