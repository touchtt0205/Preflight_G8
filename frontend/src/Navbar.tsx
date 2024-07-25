import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "./LogoPreflight.png";
import "./global.css";

const NavBar = () => {
  return (
    <Navbar bg="grey" expand="lg" style={{ backgroundColor: "#37517e" }}>
      <Container>
        <Navbar.Brand as={Link as any} to="/">
          <img src={Logo} alt="My Photo App Logo" style={{ height: "40px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="me-auto ">
            {/* You can add other left-aligned links here if needed */}
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={Link as any} to="/">
              Gallery
            </Nav.Link>
            <Nav.Link as={Link as any} to="/instructor">
              Instructor
            </Nav.Link>
            <Nav.Link as={Link as any} to="/creator">
              Creator
            </Nav.Link>
            <Nav.Item>
              <Nav.Link
                as={Link as any}
                to="/upload"
                // variant="outline-primary"
                // className="text-light"
                style={{
                  fontSize: "15px",
                  backgroundColor: "#ffffff",
                  borderRadius: "25px",
                  color: "#37517e",
                  boxShadow:
                    "0 6px 12px 0 rgba(0,0,0,0.2), 0 6px 15px 0 rgba(0,0,0,0.19)",
                }}
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
