import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './Details.css'

const Details = () => {
    const { id } = useParams();
    const [details, setDetails] = useState({});
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                const matchedService = data.find(service => service.id === parseInt(id));
                setDetails(matchedService);
            })
    }, [id]);
    return (
        <Container>
            <Row className="my-5">
                <Col md={4}>
                    <div>
                        <img className="img-fluid" src={details?.image} alt="" />
                    </div>
                </Col>
                <Col md={8} className="col-bg d-flex justify-content-center align-items-center">
                    <div>
                        <h3>{details?.name}</h3>
                        <p>{details?.description}</p>
                        <h6>Service Cost: ${details?.price}</h6>
                        <Button className="details-btn mt-3">Confirm {details?.name}</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Details;