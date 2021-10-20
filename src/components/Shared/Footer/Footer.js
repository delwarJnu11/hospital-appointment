import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './Footer.css';
import logo from '../../../images/footer-logo.webp';
import { FaEnvelope, FaFacebookF, FaMapMarkedAlt, FaPhoneAlt, FaTwitter, FaYoutube } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import Zoom from 'react-reveal/Zoom';

const Footer = () => {
    return (
        <div className="footer-bg pt-5">
            <Zoom>
                <Container>

                    <Row>
                        <Col md={3}>
                            <Image src={logo}></Image>
                            <div className="mt-3">
                                <p>Firmament morning sixth subdue darkness creeping gathered divide.</p>
                            </div>
                            <p mt-5>
                                <FaFacebookF className="icon" />
                                <FaTwitter className="icon" />
                                <FaYoutube className="icon" />
                            </p>
                        </Col>
                        <Col md={3}>
                            <h3 className="mb-3">Departments</h3>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Eye Care</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column  mt-2 footer-menu" to="/about">Skin Care</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/services">Pathology</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/contact">Medicine</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/login">Dental</NavLink>
                        </Col>
                        <Col md={3}>
                            <h3 className="mb-3">Usefull Links</h3>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/about">About</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/services">Services</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/contact">Contact</NavLink>
                            <NavLink className="text-decoration-none d-flex flex-column mt-2 footer-menu" to="/login">Login</NavLink>
                        </Col>
                        <Col md={3}>
                            <h3 className="mb-3">Address</h3>
                            <p><FaMapMarkedAlt className="fs-6" /> <span className="ms-2">200, D-block, Green lane USA</span></p>
                            <p><FaPhoneAlt className="fs-6" /> <span className="ms-2">+880 1749497676</span></p>
                            <p><FaEnvelope className="fs-6" /> <span className="ms-2">delwarjnu24@gmail.com</span></p>
                        </Col>
                    </Row>

                </Container>
                <hr />
                <p className="text-center m-0 pb-3">All Right Reserved &copy; DocMed. </p>
            </Zoom>
        </div>
    );
};

export default Footer;