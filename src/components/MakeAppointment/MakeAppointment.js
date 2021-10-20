import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import appointment from '../../images/appointment.png';
import Flip from 'react-reveal/Flip';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import './MakeAppointment.css';

const MakeAppointment = () => {
    window.scrollTo(0, 10)
    const { allAuth } = useAuth();
    const { user } = allAuth;
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        alert('Your Information Successfully Submitted!!!')
    };
    return (

        <Container className="my-5">
            <Row>
                <Col className="w-75 mx-auto">
                    <Flip left cascade>
                        <h2 className="text-center">Make an Appointment To Get Your Service</h2>
                    </Flip>
                    <Fade right cascade>
                        <p className="text-center mb-5">Sending an appointment reminder text message or confirmation text message will not only prevent employees from wasting time with follow-up communications, but it will also help your business’s bottom line by reducing no-show rates.</p>
                    </Fade>
                </Col>
            </Row>
            <Row className="py-5">
                <Col md={6}>
                    <Flip left cascade>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3" defaultValue={user.displayName} {...register("name")} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input className="w-100 form-control mb-3" defaultValue={user.email} {...register("email", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Address" className="w-100 form-control mb-3" {...register("address", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="City" className="w-100 form-control mb-3" {...register("city", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="write service name" className="w-100 form-control mb-3" {...register("service name", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="Doctor Name" className="w-100 form-control mb-3" {...register("doctor name", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <input required placeholder="date" type="date" className="w-100 form-control mb-3" {...register("date", { required: true })} />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </Col>
                            </Row>
                            <Button variant="info text-white mt-3 w-25" type="submit">
                                Submit
                            </Button>
                        </form>
                    </Flip>
                </Col>
                <Col md={6}>
                    <Zoom>
                        <div className="text-center">
                            <img src={appointment} alt="" className="img-fluid" />
                        </div>
                    </Zoom>
                </Col>
            </Row>
        </Container>

    );
};

export default MakeAppointment;