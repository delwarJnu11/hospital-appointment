import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Doctors.css';
import doctor1 from '../../../images/doctor1.webp'
import doctor2 from '../../../images/doctor2.webp'
import doctor3 from '../../../images/doctor3.webp'
import doctor4 from '../../../images/doctor4.webp'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Tada from 'react-reveal/Tada';
import Slide from 'react-reveal/Slide';

const Doctors = () => {
    return (
        <Container className="my-5">
            <Tada>
                <h2 className="text-center fs-1 mb-4">Our Expert Doctors</h2>
            </Tada>
            <Row>
                <Col md={3}>
                    <Slide left cascade>
                        <div>
                            <div className="text-center">
                                <img className="img-fluid" src={doctor1} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5 className="text-center doctor-name">Mr. Mark Otto</h5>
                                <p className="text-center role mt-2"><span>Neurologist</span></p>
                                <div className="text-center">
                                    <FaFacebookF className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaInstagram className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaTwitter className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaLinkedin className="fs-2 mx-1 p-1 doctor-icon" />
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Col>
                <Col md={3}>
                    <Slide bottom cascade>
                        <div>
                            <div className="text-center">
                                <img className="img-fluid" src={doctor2} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5 className="text-center doctor-name">Mr. Steven Allen</h5>
                                <p className="text-center role mt-2"><span>Neurologist</span></p>
                                <div className="text-center">
                                    <FaFacebookF className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaInstagram className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaTwitter className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaLinkedin className="fs-2 mx-1 p-1 doctor-icon" />
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Col>
                <Col md={3}>
                    <Slide top cascade>
                        <div>
                            <div className="text-center">
                                <img className="img-fluid" src={doctor3} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5 className="text-center doctor-name">Mr.Mark Wood</h5>
                                <p className="text-center mt-2 role"><span>Neurologist</span></p>
                                <div className="text-center">
                                    <FaFacebookF className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaInstagram className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaTwitter className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaLinkedin className="fs-2 mx-1 p-1 doctor-icon" />
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Col>
                <Col md={3}>
                    <Slide right cascade>
                        <div>
                            <div className="text-center">
                                <img className="img-fluid" src={doctor4} alt="" />
                            </div>
                            <div className="doctor-content">
                                <h5 className="text-center doctor-name">Mr. Johnson</h5>
                                <p className="text-center mt-2 role"><span>Neurologist</span></p>
                                <div className="text-center">
                                    <FaFacebookF className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaInstagram className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaTwitter className="fs-2 mx-1 p-1 doctor-icon" />
                                    <FaLinkedin className="fs-2 mx-1 p-1 doctor-icon" />
                                </div>
                            </div>
                        </div>
                    </Slide>
                </Col>
            </Row>
        </Container>
    );
};

export default Doctors;