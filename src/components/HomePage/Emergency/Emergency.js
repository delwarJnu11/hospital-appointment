import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './emarrgency.css';

const Emergency = () => {
    return (
        <Container fluid>
            <Row>
                <Col className="emergency-col" md={6}>
                    <div className="d-flex justify-content-center align-items-center emergency-content justify-content-around">
                        <div className="text-white">
                            <h3>For Emergency Contact</h3>
                            <p>Esteem spirit temper too say adieus.</p>
                        </div>
                        <div className="justify-content-end">
                            <Button className="category-btn emergency-btn">+880 1749497676</Button>
                        </div>
                    </div>
                </Col>
                <Col md={6} className="appointment-col">
                    <div className="d-flex justify-content-center align-items-center emergency-content justify-content-around">
                        <div className="text-white">
                            <h3>Make an Online Appointment</h3>
                            <p>Esteem spirit temper too say adieus.</p>
                        </div>
                        <div className="justify-content-end">
                            <Button className="category-btn emergency-btn">Make an Appointment</Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Emergency;