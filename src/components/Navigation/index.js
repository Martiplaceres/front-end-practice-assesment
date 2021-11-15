import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../store/user/selectors";
import NavbarItem from "./NavbarItem";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";
import "../../App.css";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  return !token ? (
    <div className="navBar">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          Cool story bro!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }} fill>
            <NavbarItem path="/" linkText="Home" />
            {loginLogoutControls}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  ) : (
    <div>
      {" "}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand as={NavLink} to="/">
          Cool story bro!
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{ width: "100%" }} fill>
            <NavbarItem path="/" linkText="Home" />
            <NavbarItem path="/myspace" linkText="My Space" />
            {loginLogoutControls}
          </Nav>
        </Navbar.Collapse>
      </Navbar>{" "}
    </div>
  );
}
