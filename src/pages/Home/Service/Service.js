import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    const navigate = useNavigate()
    const handleCheckOut = (name) => {
        navigate(`/services/${name}`)
    }
    return (
        <Row xs={1} md={1} className="g-4 container">
            {Array.from({ length: 1 }).map((_, idx) => (
                <Col >
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <h4 className='service-title'>{name}</h4>

                            <p className='fw-bold'>Price: $<span>{price}</span></p>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <div className='text-center'>
                                <button onClick={() => handleCheckOut(name)} className='btn btn-outline-primary w-75'>CheckOut</button>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default Service;