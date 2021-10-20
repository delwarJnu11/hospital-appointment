import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css'

const Header = () => {
    const { allAuth } = useAuth();
    const { user, logOut } = allAuth;
    return (
        <Navbar sticky="top" bg="info" expand="lg">
            <Container className="d-flex justify-content-center align-items-center">
                <Navbar.Brand as={HashLink} to="/home"><img src={logo} alt="" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto d-flex align-items-center">
                        <HashLink className="text-decoration-none menu-item me-4 fw-bold" to="/home">Home</HashLink>
                        <HashLink className="text-decoration-none menu-item me-4 fw-bold" to="about">About</HashLink>
                        <HashLink className="text-decoration-none menu-item me-4 fw-bold" to="/services">Services</HashLink>
                        <HashLink className="text-decoration-none menu-item me-4 fw-bold" to="/contact">Contact</HashLink>
                        <HashLink className="text-decoration-none menu-item me-4 fw-bold" to="/appointment">Make an Appointment</HashLink>
                        {!user.displayName ? (<div className="d-flex"><HashLink className="text-decoration-none menu-item me-4 fw-bold" to="/login">Sign In</HashLink>
                            <HashLink className="text-decoration-none menu-item me-4 fw-bold" to="/signup">Sign Up</HashLink>
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