import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="shadow-sm">
            <Container fluid>
                <Navbar.Brand href="#home" style={{ color: "purple" }} className="nav-title">Study Point</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto fw-bolder">

                        <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#courses">Courses</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#contact">Contact</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} to="/login" >Login</Nav.Link>

                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;