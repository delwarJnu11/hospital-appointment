import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col md={6} className="banner-text d-flex justify-content-center align-items-center">
                        <div>
                            <h1 className="title-bolder">Health Care </h1>
                            <h1 className="title-bold">For Whole Family</h1>
                            <p className="banner-desc mt-4">Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                            <NavLink to="/services">
                                <Button className="special-btn mt-3">Check Our Services</Button>
                            </NavLink>
                        </div>
                    </Col>
                    <Col md={6}>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;