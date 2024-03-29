import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './emarrgency.css';
import Rotate from 'react-reveal/Rotate'
import { Link } from 'react-router-dom';

const Emergency = () => {
    return (
        <Container fluid>
            <Row>

                <Col md={6} className="emergency-col">
                    <Rotate bottom left cascade>
                        <div className="d-flex justify-content-center align-items-center emergency-content justify-content-around">
                            <div className="text-white">
                                <h3 className="fs-3">For Emergency Contact</h3>
                                <p>Esteem spirit temper too say adieus.</p>
                            </div>
                            <div className="justify-content-end">
                                <Button className="category-btn emergency-btn">+880 1749497676</Button>
                            </div>
                        </div>
                    </Rotate>
                </Col>

                <Col md={6} className="appointment-col">
                    <Rotate top right cascade>
                        <div className="d-flex justify-content-center align-items-center emergency-content justify-content-around">
                            <div className="text-white">
                                <h3 className="fs-3">Make an Online Appointment</h3>
                                <p>Esteem spirit temper too say adieus.</p>
                            </div>
                            <div className="justify-content-end">
                                <Link to='/appointment'>
                                    <Button className="category-btn emergency-btn">Make an Appointment</Button>
                                </Link>
                            </div>
                        </div>
                    </Rotate>
                </Col>
            </Row>
        </Container>
    );
};

export default Emergency;