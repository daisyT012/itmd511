import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Illinois Tech Tips</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link smooth={true} to="tips" class="nav-link" href="/tips">Tips</Nav.Link>
            <Nav.Link smooth={true} to="submit" class="nav-link" href="/submit">Submit</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
