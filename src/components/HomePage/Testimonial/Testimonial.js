import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaHospitalAlt } from 'react-icons/fa';
import image from '../../../images/pic.webp';
import './Testimonial.css';
import Zoom from 'react-reveal/Zoom';

const Testimonial = () => {
    return (
        <Container className="testimonial-banner mt-5">
            <Row>

                <Col md={6} className="d-flex justify-content-enter align-items-center">
                    <Zoom left cascade>
                        <div>
                            <FaHospitalAlt className="fs-1 text-info" />
                            <h2 className="mt-3 fs-2">Leading edge care for Your family</h2>
                            <p className="mt-3">Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                            <p>Esteem spirit temper too say adieus who direct esteem. It esteems luckily picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                        </div>
                    </Zoom>
                </Col>

                <Col md={6}>
                    <Zoom>
                        <div className="text-center">
                            <img src={image} alt="" className="img-fluid" />
                        </div>
                    </Zoom>
                </Col>
            </Row>
        </Container>
    );
};

export default Testimonial;