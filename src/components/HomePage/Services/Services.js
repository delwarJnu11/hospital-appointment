import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
    const { allServices } = useAuth();
    const { services } = allServices;
    return (
        <Container className="mt-5">
            <Row>
                <Col>

                    <div>
                        <h2 className="text-center fs-1">Our Departments</h2>
                        <p className="text-center mt-3 mb-5">Apartments frequently or motionless on reasonable projecting expression.Good dental or oral care is important to maintaining.</p>
                    </div>
                </Col>
            </Row>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </Container>
    );
};

export default Services;