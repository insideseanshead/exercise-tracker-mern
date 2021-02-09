import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
} from "react-bootstrap";

export default class Navigation extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Exercise Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Exercises</Nav.Link>
              <Nav.Link href="/create">Create Exercise Log</Nav.Link>
              <Nav.Link href="/user">Create User</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </div>
    );
  }
}
