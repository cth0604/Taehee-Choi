import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-sm bg-light sticky-top">
      <a className="navbar-brand" href="#">
        <img
          src="https://i.pinimg.com/originals/0f/eb/7f/0feb7f21feab6a113c24cc4e7ccaef86.jpg"
          alt="logo"
          width="60"
          height="30"
        />
      </a>
      <ul className="navbar-nav">
        <Link to="/">
          <li className="nav-item nav-link">Home</li>
        </Link>
        <Link to="/shop">
          <li className="nav-item nav-link">Shop</li>
        </Link>
      </ul>
      <ul className="navbar-nav ml-auto">
        <Link to="/cart">
          <li className="nav-item nav-link">
            <i className="fas fa-shopping-cart"></i>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
