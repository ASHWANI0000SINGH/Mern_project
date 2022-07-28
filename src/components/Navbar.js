import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const naviagte = useNavigate();
  const auth = localStorage.getItem("user");
  const deleteLocalStorage = () => {
    localStorage.clear();
    naviagte("signUp");
  };
  return (
    <div>
      {auth ? (
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">AddProducts</Link>
          </li>
          <li>
            <Link to="/update">UpdateProducts</Link>
          </li>
          
          <li>
            <Link onClick={deleteLocalStorage} to="/logout">
              Logout { JSON.parse(auth).name}
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <>
            <li>
              <Link to="/signUp">signUp</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
