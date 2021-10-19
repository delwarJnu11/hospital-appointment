import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const { allAuth } = useAuth();
    const { user, logOut } = allAuth;
    console.log(user)
    return (
        <Navbar sticky="top" bg="light" expand="lg">
            <Container className="d-flex justify-content-center align-items-center">
                <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="about">About</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/contact">Contact</Nav.Link>
                        {!user.email ? (<div className="d-flex"><Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/login">Sign In</Nav.Link>
                            <Nav.Link as={HashLink} className="text-decoration-none me-2 fw-bold" to="/signup">Sign Up</Nav.Link>
                        </div>) :
                            (<NavDropdown title={<img className='userImage' src={user?.photoURL} alt="Img" />} id="basic-nav-dropdown">
                                <NavDropdown.Item>{user.displayName}</NavDropdown.Item>
                                <NavDropdown.Item><Button onClick={logOut}>Log Out</Button></NavDropdown.Item>
                            </NavDropdown>)
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;