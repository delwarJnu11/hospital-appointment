import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import contact from './../../images/contact.png';
import Fade from 'react-reveal/Fade';

const Contact = () => {
    return (
        <Container className="my-5">
            <Row>
                <div className="text-center w-75 mx-auto mb-4">
                    <Fade left>
                        <h3 className="fs-1 fw-bold mb-3">Get In Touch</h3>
                    </Fade>
                    <Fade right>
                        <p className="mb-4">Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                    </Fade>
                </div>
                <Col md={6} className="">
                    <Fade left>
                        <Form>

                            <Form.Group className="mb-3" controlId="formGridName">
                                <Form.Control type="name" placeholder="Enter Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridEmail">
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>


                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                <Form.Control placeholder="Apartment, studio, or floor" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Control placeholder="city" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Control placeholder="Zip" />
                                </Form.Group>
                            </Row>

                            <Form.Control
                                as="textarea"
                                placeholder="Write your Message"
                                style={{ height: '100px' }}
                            />

                            <Button variant="info text-white mt-3 w-25" type="submit">
                                Contact us
                            </Button>
                        </Form>
                    </Fade>
                </Col>
                <Col md={6}>
                    <Fade right>
                        <div className="text-center">
                            <img src={contact} alt="" className="img-fluid" />
                        </div>
                    </Fade>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;