import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Dropdown } from 'react-bootstrap';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Services
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item as ={Link} to="/newAccount">New Account</Dropdown.Item>
        {/* <Dropdown.Item as ={Link} to="">Apply for Cards</Dropdown.Item>
        <Dropdown.Item as ={Link} to="">Checkbook</Dropdown.Item>
        <Dropdown.Item as ={Link} to="">Passbook</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
