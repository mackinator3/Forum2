
import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navigation() {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary navBar">
                <Container className="navBar">
                    <Navbar.Brand as={Link} to="/">MackNation Industry</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/Anime">Anime</Nav.Link>
                            <Nav.Link as={Link} to="/Videogames" className="hidden">Video Games</Nav.Link>
                            <Nav.Link as={Link} to="/StarWars">Star Wars</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="hidden">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}