import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';
import Zoom from 'react-reveal/Zoom';

const Service = ({ service }) => {
    const { id, image, name, description } = service;
    return (
        <Col>
            <Zoom>
                <Card className="single-card">
                    <Card.Img variant="top" src={image} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="description">{description.slice(0, 220)}</Card.Text>
                        <NavLink className="" to={`/service/${id}`}>
                            <Button className="details-btn w-75">View {name}</Button>
                        </NavLink>
                    </Card.Body>
                </Card>
            </Zoom>
        </Col>
    );
};

export default Service;