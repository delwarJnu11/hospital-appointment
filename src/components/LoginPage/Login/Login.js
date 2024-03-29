import React from 'react';
import { Button, Col, Container, Form, FormControl, InputGroup, Row } from 'react-bootstrap';
import { FaEnvelope, FaLock, } from 'react-icons/fa';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import google from '../../../images/google.png';
import facebook from '../../../images/facebook.png';
import github from '../../../images/github.png';
import './Login.css'
import useAuth from '../../../hooks/useAuth';
import Zoom from 'react-reveal/Zoom';

const Login = () => {
    const { allAuth } = useAuth();
    const { error, setError, setIsLoading, getPassword, getEmail, signInWithEmail, signInWithGoogle, signInWithGithub, signInWithFacebook, resetPassword } = allAuth;

    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location?.state?.from || '/home';
    //Google Sign In
    const HandleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false);
            })
    }
    //Facebook Sign In
    const HandleFacebookSignIn = () => {
        signInWithFacebook()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false);
            })

    }
    //Github Sign In
    const HandleGithubSignIn = () => {
        signInWithGithub()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false);
            })
    }
    //Email Pass Sign in
    const handleEmailSignIn = (e) => {
        e.preventDefault();
        signInWithEmail()
            .then(result => {
                history.push(redirect_uri)
            })
            .catch((error) => {
                setError(error.message)
            }).finally(() => {
                setIsLoading(false);
            })

    }
    return (
        <Container className="my-5">
            <Row>
                <Col md={4}>

                </Col>

                <Col md={4} className="login-form">
                    <Zoom>
                        <h3 className="my-4">Please Login</h3>
                        <p className="text-danger">{error}</p>
                        <Form onSubmit={handleEmailSignIn}>
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

                            <Button type="submit" className="mt-2 w-100 details-btn">
                                Login
                            </Button>
                            <Button type="reset" onClick={resetPassword} className="mt-2 w-100 details-btn">
                                Reset Password
                            </Button>
                        </Form>
                        <p className="mt-2 text-center">New User?
                            <NavLink className="text-decoration-none" to="/signup"> Create an Account</NavLink>
                        </p>
                        <p className="text-center fs-5">
                            --------- or --------
                        </p>
                        <div className="text-center">
                            <Button onClick={HandleGoogleSignIn} className="me-2 icon-bg">
                                <img width="30px" src={google} alt="" />
                            </Button>
                            <Button onClick={HandleFacebookSignIn} className="me-2 icon-bg">
                                <img width="35px" src={facebook} alt="" />
                            </Button>
                            <Button onClick={HandleGithubSignIn} className="icon-bg">
                                <img width="40px" src={github} alt="" />
                            </Button>
                        </div>
                    </Zoom>
                </Col>

                <Col md={4}>

                </Col>
            </Row>
        </Container>
    );
};

export default Login;