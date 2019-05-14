import React from "react";

const Navbar = props => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light mb-5">
      <span className="navbar-brand mb-0 h1">{props.totalItem}</span>
    </nav>
  );
};

export default Navbar;
