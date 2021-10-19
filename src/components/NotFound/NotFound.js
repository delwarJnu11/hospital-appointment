import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../../images/notfound.png';
const NotFound = () => {
    return (
        <div className="text-center my-5">
            <img width="500px" src={image} alt="" />
            <br />
            <Link to="/home">
                <Button variant="danger">Go Back</Button>
            </Link>
        </div>
    );
};

export default NotFound;