import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-dark.png';
import { FiShoppingCart } from 'react-icons/fi';
import './Header.css';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    
    const handleLogOut = () => {
        logOut()
        .then( () => {})
        .catch(error => {
            toast.error(error.message);
        })
    };

    return (
        <Navbar className='navbar' collapseOnSelect expand="lg" sticky="top">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img className='logo' src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto navbar-menu">
                        <Nav.Link as={Link} to='/' className='position-relative'>
                            <FiShoppingCart className='fs-5'></FiShoppingCart>
                            <span style={{ backgroundColor: "#f91944" }} className="position-absolute top-1 translate-middle badge rounded-circle">
                                {0}
                            </span>
                        </Nav.Link>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        {
                            user?.uid ?
                            <button onClick={handleLogOut} className='logout'>Logout</button>
                            : 
                            <Nav.Link as={Link} to="/login" className='login'>Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;