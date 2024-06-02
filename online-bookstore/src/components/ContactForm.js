import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const ContactForm = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Contact Us</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>

                    <Form.Group controlId="formPhone" className="mt-3">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" />
                    </Form.Group>

                    <Form.Group controlId="formEmail" className="mt-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Submit
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ContactForm;
