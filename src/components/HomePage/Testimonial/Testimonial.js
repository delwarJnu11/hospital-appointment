import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHospitalAlt } from 'react-icons/fa';
import image from '../../../images/pic.webp';
import './Testimonial.css'

const Testimonial = () => {
    return (
        <Container className="testimonial-banner mt-5">
            <Row>
                <Col md={6}>
                    <FaHospitalAlt className="fs-1 text-info" />
                    <h2 className="mt-3 fs-2">Leading edge care for Your family</h2>
                    <p className="mt-3">Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                    <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                </Col>
                <Col md={6}>
                    <img src={image} alt="" className="img-fluid" />
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonial;