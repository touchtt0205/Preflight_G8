// import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./LogoPreflight.png";
import "./global.css";

const NavBar = () => {
  return (
    <Navbar bg="grey" expand="lg" style={{ backgroundColor: "#37517e",}}>
      <Container className="container-xl" >
        <Navbar.Brand as={Link as any} to="/">
          <img src={Logo} alt="My Photo App Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ">
            {/* You can add other left-aligned links here if needed */}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link as any} to="/" className="text-light nav-link-hover"style={{padding: " 15px"}}>
              Gallery
            </Nav.Link>
            <Nav.Link as={Link as any} to="/creator" className="text-light nav-link-hover"  style={{ padding: "15px"}}>
              Creator
            </Nav.Link>
            <Nav.Link as={Link as any} to="/instructor" className="text-light nav-link-hover" style={{padding: "15px"}}>
              Instructor
            </Nav.Link>
            <Nav.Item className="navlink">
              <Nav.Link
                as={Link}
                to="/upload"
                // variant="outline-primary"
                // className="text-light"
              >
              Start Upload
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;