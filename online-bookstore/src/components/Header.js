// src/components/Header.js
import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import ContactForm from './ContactForm';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">
                <img
                        src="logonew.png" // Assuming the logo is in the public directory
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="BookStore logo"
                    />
                    BookStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/books">All Books</Nav.Link>
                        <Nav.Link href="#">Categories</Nav.Link>
                        <Nav.Link href="#">Bestsellers</Nav.Link>
                        <Nav.Link href="#">New Arrivals</Nav.Link>
                    </Nav>
                    <Form className="d-flex ms-auto">
                        <FormControl type="text" placeholder="Search for books..." className="me-2" />
                        <Button variant="outline-warning">Search</Button>
                    </Form>
                    <Button variant="outline-light" className="ms-3" onClick={handleShow}>
                        Contact Us
                    </Button>
                </Navbar.Collapse>
            </Navbar>
            <ContactForm show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;
