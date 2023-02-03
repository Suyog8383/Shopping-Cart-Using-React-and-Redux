import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={{ justifyContent: "space-around" }}
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>

        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
          <Link to="cart">Cart</Link>
        </button>
      </nav>
    </>
  );
}

export default NavBar;
