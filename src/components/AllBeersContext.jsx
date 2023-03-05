import React from "react";
import { NavLink } from "react-router-dom";
import Nav  from "./Nav";
function AllBeersContext() {
  return (
    <div>
      <NavLink to="/">
        <Nav />
      </NavLink>
      hola
    </div>
  );
}

export default AllBeersContext;
