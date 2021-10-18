import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { FaHospitalAlt, FaPhoneAlt } from 'react-icons/fa';
import './Category.css'

const Category = () => {
    return (
        <div className="section-bg">
            <Container>
                <Row>
                    <Col md={4} className="p-4">
                        <div>
                            <p className="text-white fs-1"> <FaHospitalAlt /> </p>
                            <h3 className="text-white">Hospitality</h3>
                            <p className="text-white">Clinical excellence must be the priority for any health care service provider.</p>
                            <Button className="category-btn">Apply For A Bed</Button>
                        </div>
                    </Col>
                    <Col md={4} className="p-4 middle-col">
                        <div>
                            <p className="text-white fs-1"> <FaPhoneAlt /> </p>
                            <h3 className="text-white">Emergency Care</h3>
                            <p className="text-white">Clinical excellence must be the priority for any health care service provider.</p>
                            <Button className="category-btn">+880 1749497676</Button>
                        </div>
                    </Col>
                    <Col md={4} className="p-4">
                        <div>
                            <p className="text-white fs-1"> <FaHospitalAlt /> </p>
                            <h3 className="text-white">Chamber Service</h3>
                            <p className="text-white">Clinical excellence must be the priority for any health care service provider.</p>
                            <Button className="category-btn">Make An Appointment</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Category;