import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import SectionHeading from '../SectionHeading/SectionHeading';
import AboutImage from "../../images/about-img.jpg";
import "./AboutText.css";

const AboutText = () => {
    return (
        <section className='about-text-area gy-2'>
            <Container>
                <SectionHeading heading="About Us" text="Learn More About Us"/>
                <Row>
                    <Col lg={5} >
                        <div className='about-img w-100%'>
                            <img src={AboutImage} alt="" />
                        </div>

                    </Col>
                    <Col lg={7}>
                        <div className="about-text">
                            <h2>Yummy Athentic Food Service </h2>
                        <p>Yummy is a small food business that offers a wide range of delicious and healthy food options to its customers. Our goal is to provide high-quality meals that not only taste great but also nourish the body. We believe that food should be both delicious and nutritious, which is why we use only the freshest and highest-quality ingredients in all of our dishes. Whether you're looking for a quick and healthy breakfast on-the-go, a hearty and flavorful lunch, or a satisfying dinner, Yummy has something to offer. Our menu features a variety of options, including vegan and gluten-free dishes, so there's something for everyone. We're committed to providing a great experience for our customers, and we strive to exceed their expectations every time they visit us.</p>
                        </div>
                    
                    </Col>      
                </Row>
            </Container>

            
        </section>
    );
};

export default AboutText;