import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import SectionHeading from '../SectionHeading/SectionHeading';
import EventOne from "../../images/events-1.jpg";
import EventTwo from "../../images/events-2.jpg";
import EventThree from "../../images/events-3.jpg";
import EventFour from "../../images/event-4.jpeg";
import EventFive from "../../images/event-5.jpg";
import EventSix from "../../images/event-6.webp";
import "./EventsText.css";

const EventsText = () => {
    return (
        <section className='events-text-area'>
            <Container>
             <SectionHeading heading="Events" text="SOME EVENT'S MOMENTS" />
             <div className='all-events'>
             <Row>
                <Col lg={4} className="pt-2 pb-2" >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EventOne} alt="" />
                <Card.Body>
                <Card.Title>Custom Parties</Card.Title>
                <Card.Text>
                <h4> $99</h4>
                Looking to plan a unique and unforgettable party? Look no further! Our custom parties are the perfect way to celebrate any occasion. <br/>

Whether it's a birthday, graduation, engagement, or just a night out with friends, we'll work with you to create the perfect party experience.
                </Card.Text>
                <Button variant="danger">Booking here</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4} className="pt-2 pb-2" >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EventTwo} alt="" />
                <Card.Body>
                <Card.Title>Private Parties</Card.Title>
                <Card.Text>
                <h4> $289</h4>
                Looking to plan a unique and unforgettable party? Look no further! Our custom parties are the perfect way to celebrate any occasion. <br/>

Whether it's a birthday, graduation, engagement, or just a night out with friends, we'll work with you to create the perfect party experience.
                </Card.Text>
                <Button variant="danger">Booking here</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4} className="pt-2 pb-2" >
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EventThree} alt="" />
                <Card.Body>
                <Card.Title>Birthday Parties</Card.Title>
                <Card.Text>
                <h4> $499</h4>
                Looking to plan a unique and unforgettable party? Look no further! Our custom parties are the perfect way to celebrate any occasion. <br/>

Whether it's a birthday, graduation, engagement, or just a night out with friends, we'll work with you to create the perfect party experience.
                </Card.Text>
                <Button variant="danger">Booking here</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4} className="pt-3 pb-5">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EventFour} alt="" />
                <Card.Body>
                <Card.Title>Wedding Parties</Card.Title>
                <Card.Text>
                <h4> $2000</h4>
                Looking to plan a unique and unforgettable party? Look no further! Our custom parties are the perfect way to celebrate any occasion. <br/>

Whether it's a birthday, graduation, engagement, or just a night out with friends, we'll work with you to create the perfect party experience.
                </Card.Text>
                <Button variant="danger">Booking here</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4} className="pt-3 pb-5">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EventFive} alt="" />
                <Card.Body>
                <Card.Title>Confarance Meeting</Card.Title>
                <Card.Text>
                <h4> $1500</h4>
                Looking to plan a unique and unforgettable party? Look no further! Our custom parties are the perfect way to celebrate any occasion. <br/>

Whether it's a birthday, graduation, engagement, or just a night out with friends, we'll work with you to create the perfect party experience.
                </Card.Text>
                <Button variant="danger">Booking here</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col lg={4} className="pt-3 pb-5">
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={EventSix} alt="" />
                <Card.Body>
                <Card.Title>Buffet Parties</Card.Title>
                <Card.Text>
                <h4> $250</h4>
                Looking to plan a unique and unforgettable party? Look no further! Our custom parties are the perfect way to celebrate any occasion. <br/>

Whether it's a birthday, graduation, engagement, or just a night out with friends, we'll work with you to create the perfect party experience.
                </Card.Text>
                <Button variant="danger">Booking here</Button>
                </Card.Body>
                </Card>
                </Col>
             </Row>
             </div>
            </Container>
            
        </section>
    );
};

export default EventsText;