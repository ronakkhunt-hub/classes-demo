import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { auth } from "../firebase-config";
function NavBar() {
  const [userProfile, setUserProfile] = useState({});

  onAuthStateChanged(auth, (currentUser) => {
    setUserProfile(currentUser);
  });

  return (
    <Navbar variant="light" bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link style={{ textDecoration: "none", color: "#333333" }} to="/">
            React-Bootstrap
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <Nav.Item>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#666666" }}
                  to="/users"
                >
                  Users
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#666666" }}
                  to="/posts"
                >
                  Posts
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link
                  style={{ textDecoration: "none", color: "#666666" }}
                  to="/login"
                >
                  {userProfile ? userProfile.email : "Login"}
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBar;
