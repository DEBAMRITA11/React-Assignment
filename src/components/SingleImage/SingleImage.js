import React from 'react';
import Col from 'react-bootstrap/Col';
import "./SingleImage.css";


const SingleImage = ({ Image }) => {
    return (
        <Col lg={3}>
        <div className='single-image'>
            <img src={Image} alt="#" />
        </div>
        </Col>
        
    );
};

export default SingleImage;