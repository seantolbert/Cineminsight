import * as usersService from "../../utilities/users-service";
import { Link } from "react-router-dom";
import Logo from "../../Assets/cineminsight_logo.png";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

export default function NavBar({ user, setUser }) {
  const handleLogOut = () => {
    usersService.logOut();
    setUser(null);
  };

  return (
    <>
      <Container fluid>
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Navbar.Brand>
            <Link style={{ textDecoration: "none" }} to="/">
              <img
                src={Logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Cineminsight Logo"
              />{" "}
              Cineminsight
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="justify-content-end"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link style={{ textDecoration: "none" }} to="/cinemas">
                  Cinemas
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link style={{ textDecoration: "none" }} to="/insights">
                  Insights
                </Link>
              </Nav.Link>
              <NavDropdown title="Create" id="collapsible-nav-dropdown">
                <NavDropdown.Item>
                  <Link style={{ textDecoration: "none" }} to="/cinemas/new">
                    New Cinema
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/user/insights/newinsight"
                  >
                    New Insight
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link>
                <Link style={{ textDecoration: "none" }} to="/user">
                  Profile
                </Link>
              </Nav.Link>
              <hr />

              <Button onClick={handleLogOut}>Log Out</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
}
