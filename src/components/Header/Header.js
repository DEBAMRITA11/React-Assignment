

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Logo from "../../images/logo.png";
import "./Header.css";



function Header() {
    return (
        <header className="header-area">
            <Navbar bg="light" variant="light" expand="lg" className='py-3'>
                <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} alt=''/>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                            <NavLink to="/about" className="nav-link">About</NavLink>
                            <NavLink to="/menu" className="nav-link">Menu</NavLink>
                            <NavLink to="/events" className="nav-link">Events</NavLink>
                            <NavLink to="/chaf's" className="nav-link">Chaf's</NavLink>
                            <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                            <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            <NavLink to="/booking" className="nav-link">Book a Table</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default Header; 