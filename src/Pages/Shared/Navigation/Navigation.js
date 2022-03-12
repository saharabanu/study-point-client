import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../Hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const {user,logOut} = useAuth();
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm" fixed="top">
            <Container fluid>
                <Navbar.Brand style={{ color: "#9660be" }} className="nav-title">Study Point</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-bolder">

                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#courses">Courses</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="ms-auto fw-bolder">
                        {user?.email ? <><button onClick={logOut} className="border-0 fw-bolder text-danger">Logout</button></>
                        :<Nav.Link as={Link} to="/login" >Login</Nav.Link>
                        }

                        
                        <h4>{ user?.displayName}</h4>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;