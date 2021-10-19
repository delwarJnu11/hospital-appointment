import React from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FaEnvelope, FaLink, FaLock, FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Login = () => {
    const { allAuth } = useAuth();
    const { getName, getPassword, getEmail, getPhotoUrl, createNewUser } = allAuth;
    return (
        <Container className="mt-4">
            <Row>
                <Col md={4}>

                </Col>
                <Col md={4} className="login-form">
                    <h3 className="my-4">Please Sign Up</h3>
                    <Form onSubmit={createNewUser}>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="name" visuallyHidden>
                                    Your Name
                                </Form.Label>
                                <InputGroup className="w-100 mb-2">
                                    <InputGroup.Text>
                                        <FaUser />
                                    </InputGroup.Text>
                                    <FormControl
                                        onBlur={getName}
                                        type="name"
                                        id="name"
                                        placeholder="Enter your Name"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-start">
                                <Form.Label htmlFor="email" visuallyHidden>
                                    Your Email Address
                                </Form.Label>
                                <InputGroup className="w-100 mb-2">
                                    <InputGroup.Text>
                                        <FaEnvelope />
                                    </InputGroup.Text>
                                    <FormControl
                                        onBlur={getEmail}
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email address"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="password" visuallyHidden>
                                    Your Password
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <InputGroup.Text>
                                        <FaLock></FaLock>
                                    </InputGroup.Text>
                                    <FormControl
                                        onBlur={getPassword}
                                        type="password"
                                        autoComplete="current-password"
                                        id="password"
                                        placeholder="Enter your password"
                                        required
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row xs={1} className="mt-2">
                            <Col className="text-start  col-12 col-md-12">
                                <Form.Label htmlFor="text" visuallyHidden>
                                    Your Link
                                </Form.Label>
                                <InputGroup className="mb-2 w-100">
                                    <InputGroup.Text>
                                        <FaLink />
                                    </InputGroup.Text>
                                    <FormControl
                                        onBlur={getPhotoUrl}
                                        type="text"
                                        autoComplete="text"
                                        id="text"
                                        placeholder="Enter your profile link"
                                    />
                                </InputGroup>
                            </Col>
                        </Row>


                        <Button type="submit" className="mt-2 w-100 details-btn">
                            Sign Up
                        </Button>
                    </Form>
                    <p className="text-center mt-2">
                        Already have an Account? <NavLink className="text-decoration-none" to="/login">Please Login </NavLink>
                    </p>
                </Col>
                <Col md={4}>

                </Col>
            </Row>
        </Container>
    );
};

export default Login;