import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import about from './../../images/about.webp';
import about2 from './../../images/about2.jpg';
import './About.css'

const About = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <div className="text-center">
                        <img src={about} alt="" className="img-fluid" />
                    </div>
                </Col>
                <Col md={6} className="ps-3">
                    <h5>Welcome to Docmed</h5>
                    <h2 className="fs-2 fw-bold lh-sm mt-3">Best Care For Your
                        <br /> Good Health</h2>
                    <p className="mb-3">Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                    <p className="mb-1 fs-6"> <FaCheckCircle className="text-info" /> Apartments frequently or motionless.</p>
                    <p className="mb-1 fs-6"> <FaCheckCircle className="text-info" /> Duis aute irure dolor in reprehenderit in voluptate.</p>
                    <p className="m-0 fs-6"><FaCheckCircle className="text-info" />  Voluptatem quia voluptas sit aspernatur.</p>
                    <Button className="special-btn mt-3">Learn More</Button>
                </Col>
            </Row>
            <Row className="modern-technology">
                <Col md={6} className="ps-3">
                    <h2 className="fs-2 fw-bold lh-sm mt-3">Modern Technology</h2>
                    <p className="mb-3">I honestly believe that this is the only way forward. Technology can only aid and improve our lives if we stand on its shoulder and if we are always (at least) two steps ahead of it. But if we adhere to this rule, the cooperation between people and technology could result in amazing achievements.</p>
                    <p className="fs-6"> In medicine and healthcare, digital technology could help transform unsustainable healthcare systems into sustainable ones, equalize the relationship between medical professionals and patients.</p>
                    <Button className="special-btn mt-3">Learn More</Button>
                </Col>
                <Col md={6}>
                    <div className="text-center">
                        <img src={about2} alt="" className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default About;