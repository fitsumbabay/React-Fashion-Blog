import React from "react";
import Nav from "../Nav/Nav.js";
import "./Header.css";

function Header() {
    return (
      <>
        <div className="header">
          <h1>Sartre's List</h1>
          <h2>Better-Dressed People</h2>
          <Nav />
        </div>
      </>
    );
}

export default Header;