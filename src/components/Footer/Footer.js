import React from 'react';
import Container from 'react-bootstrap/Container';
import "./Footer.css";

const Footer = () => {
    return (
        <footer className='footer-area'>
        <Container>
          <div className='copy-right'>
            <p>@Copyrights!<span> All Rights Researved by Yummy</span></p>
            </div>  
        </Container>
        </footer>
    );
};

export default Footer;