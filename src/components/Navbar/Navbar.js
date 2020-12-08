import React from "react";
import logo from "../../logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="City tours company" />
      <ul className="nav-links">
        <li>
          <a href="/" className="nav-link">
            home
          </a>
          <a href="/" className="nav-link">
            about
          </a>
          <a href="/" className="nav-link active">
            tours
          </a>
        </li>
      </ul>
    </nav>
  );
}
