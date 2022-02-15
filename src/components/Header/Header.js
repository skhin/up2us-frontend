import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container headerMenu">
        <div className="logo">
          <a href="/">
            <img width="80px" src={Logo} alt="logo" />
          </a>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          {localStorage.getItem("token") ? (
            <>
              <li>
                <Link to="/usersetting">User Profile</Link>
              </li>
              <li>
                <Link to="" onClick={() => localStorage.clear()}>
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/register">Register</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
