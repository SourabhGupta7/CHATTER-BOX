import React, { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
//importing bootstrap components
import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import logo from "./assets/olalogo.png";
import styles from "./styles/NewsFeed.module.css";

//function
export default function NewsFeed() {
  let navigate = useNavigate();
  function handleClick(e) {
    navigate("/newsfeed/allaccounts");
  }

  function handleSignOut(e) {
    localStorage.removeItem("UserId");
    localStorage.removeItem("Token");
    localStorage.removeItem("UserFirstName");
    localStorage.removeItem("UserLastName");
    localStorage.removeItem("UserEmail");
    navigate("/");
  }

  useEffect(() => {
    if (localStorage.getItem("Token") === null) {
      navigate("/unauthorized");
    }
  });
//Jsx Part
  return (
    <Container fluid className={styles.container} style={{backgroundColor: "#000000"}} >
      <Row className="mb-3">
        <Col md={4}>
          <Row className="justify-content-center align-items-center">
            <Col className="text-sm-start text-center mb-sm-100 mb-100">
              <h1 style={{color:"#7fffd4"}}>CHATTER BOX</h1>
            </Col>
          </Row>
        </Col>
        <Col md={8}>
          <div fluid className="d-flex justify-content-center align-items-center w-200 h-200" >
            <Button variant="success" onClick={handleClick} style={{backgroundColor: "#ff4500"}}>
              Find All User Accounts
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={4}>
          <Navbar bg="dark" expand="lg" className="mb-3 mb-sm-0"  >
            <Container fluid className={styles.navbarContainer} style={{backgroundColor: "#000000"}}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className={styles.navContainer} >
                <ul className="list-group">
                <Nav.Link>
                  <Link to="" className="text-decoration-none" >
                    <li className="list-group-item fs-5 py-3 shadow" style={{color: "#9370db"}}>
                      <span >
                        {" "}
                         Newsfeed
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="following" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3  shadow" style={{color: "#ff1493"}}>
                      <span>
                          Following
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="follower" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 shadow" style={{color: "#ff4500"}}>
                      <span>
                        Followers
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to="myprofile" className="text-decoration-none">
                    <li className="list-group-item fs-5 py-3 shadow" style={{color: "#663399"}}>
                      <span>
                         My Posts
                      </span>
                    </li>
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <li
                    className={`list-group-item fs-5 py-3  shadow ${styles.signOutButton}`}style={{color: "#e32636"}}
                    onClick={handleSignOut}
                  >
                    <span>
                        Sign Out
                    </span>
                  </li>
                </Nav.Link>
                </ul>
              </Nav>
            </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md={8}>
          <Outlet />{" "}
        </Col>
      </Row>
    </Container>
  );
}
 
