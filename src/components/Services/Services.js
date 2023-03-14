import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Service from "../Service/Service";
import "./Services.css";
import SectionHeading from '../SectionHeading/SectionHeading';
import { useEffect, useState } from 'react';




const Services =() => {
    const [services, setservice] = useState ([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res => res.json())
        .then(data => setservice(data));
    }, []);
    return (
        <section className="services-area mb-5"> 
        <Container>
            <SectionHeading heading="Our Menu" text="Chack Our Yummy Menu"/>
            <Row>
                {services.map(item=> 
                <Service key={item.id} item={item}></Service> )}
            </Row>
    </Container>
    </section>
    );
};
export default Services;