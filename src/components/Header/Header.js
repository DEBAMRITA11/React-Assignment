import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from "../../images/logo.png";
import "./Header.css";



function Header() {
    const [user] = useAuthState(auth);
    // For Sign-out function
    const handleSignOut =() => {
        signOut(auth);
    };
    return (
        <header className="header-area">
            <Navbar bg="light" variant="light" expand="lg" className='py-3'>
                <Container>
                <Navbar.Brand as={Link} to="/" >
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
                            {
                            user
                            ? (<Button onClick={handleSignOut} className=" btn">Sign out</Button>) 
                            : (<NavLink to="/signin" className="nav-link btn-primary">Sign in</NavLink>)
                            }
                            <NavLink to="/booking" className="nav-link">Book a Table</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};
export default Header; 