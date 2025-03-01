import React from "react";
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>


      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto text-center">
          <li className="nav-item">
            <a className="nav-link" href="/">HOME</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">SELL ON BAZAR</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">CUSTOMAR CARE</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">TRACK MY ORDER</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">LOGIN/SIGNUP</a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="/">LANGUAGE</a>
          </li>
        
        </ul>
      </div>


    </div>
  </nav>
  );
};

export default Navbar;
