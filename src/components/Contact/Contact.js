import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css";


const Contact = () => {
    return (
        <section className='contact-area'>
        <SectionHeading text="Need Help? Contact Us" heading="Contact" />
        <Container> 
        <div className='Contact-form'>    
        <Form>
      <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="address">
        <Form.Label>Address</Form.Label>
        <Form.Control type="test" placeholder="address" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="phone-number">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="number" placeholder="phone-number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
    </Form>
    <Button className="contact-button" variant="danger">Contact Us</Button>{' '}
        </div>
        </Container>
        </section>
    );
};

export default Contact;