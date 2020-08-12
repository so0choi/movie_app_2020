import React from "react";
import { Link } from "react-router-dom";

function Navition() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Navition;
