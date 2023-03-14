import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const messageDiv = document.getElementById ("message-div");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,] = useCreateUserWithEmailAndPassword(auth);
    
        if (error) {
            messageDiv.innerHTML = "error"; 
          }
          if (loading) {
            messageDiv.innerHTML = "Loading...";
          }
          if (user) {
            messageDiv.innerHTML = "User Registered";
          }
    return (
        <section className='booking-area py-5'>
         <Container>
        <Row>
            <Col lg={{span:6, offset:3}} >
                <h2 className='text-center py-5'>Sign In</h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} 
        onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} 
        onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        </Form.Group>
        <div id='message-div'></div>
        <Button variant="danger" type="submit" 
        onClick={() => createUserWithEmailAndPassword(email, password)}>
        Sign in
        </Button> 
            </Col>
        </Row>
        </Container>    
        </section>
    );
};
export default SignIn;