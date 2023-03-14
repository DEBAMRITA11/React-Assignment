import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import "./Service.css";
import React from 'react';

const Service = ({item}) => {
    return (
        <Col lg={4}>
        <div className='single-service text-center p-4'>
                <img src={item.img} alt="" className="w-100 mb-4" />
                <h3>{item.name}</h3>
                <h5>$Price:{item.price}</h5>
                <p>{item.description}</p>
                <Button variant="danger">Book a Table</Button>{' '}
                </div>
       </Col>
    );
};

export default Service;