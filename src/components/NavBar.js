import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={null}
        activeStyle={null}
      > Home </NavLink>
      <NavLink
        to="/movies"
        exact
        style={null}
        activeStyle={null}
      > Movies </NavLink>
      <NavLink
        to="/directors"
        exact
        style={null}
        activeStyle={null}
      > Directors </NavLink>
      <NavLink
        to="/actors"
        exact
        style={null}
        activeStyle={null}
      > Actors </NavLink>
    </div>
  )
}

export default NavBar;
