import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../images/logo.webp';

const Header = () => {
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container className="d-flex justify-content-center align-items-center">
                <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="about">About</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/contact">Contact</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/login">Sign In</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/signup">Sign Up</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;