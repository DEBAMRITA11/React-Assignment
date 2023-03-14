import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./Contact.css";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import ContactImage from "../../images/contact-image.webp";


function Contact() {
  return (
    <section className='contact-area'>
      <SectionHeading text="Need Help? Contact Us" heading="Contact" />
      <Container>
        <Row>
          <Col lg={4}>
            <div className='follow-us'>
              <h4>Get in touch with us</h4>
              <h6>"We're here to help!"</h6>
              <div className='facebook-icon'>
                <h5>Facebook</h5>
                <FontAwesomeIcon className='f-icon' href="https://www.facebook.com" icon={faFacebook} />
                </div>
                <div className='whatsapp-icon'>
                <h5>Whatsapp</h5>
                <FontAwesomeIcon className='w-icon' href="https://www.whatsapp.com" icon={faWhatsapp} />
                </div>
                <div className='contact-img'>
                  <img  src={ContactImage}   alt=''  />
                </div>

            </div>
          </Col>
          <Col lg={8}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;