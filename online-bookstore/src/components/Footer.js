import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white text-center py-3">
            <Container>
                <Row>
                    <Col>&copy; 2024 BookStore. All rights reserved.</Col>
                </Row>
                <Row>
                    <Col>
                        <a href="#" className="text-white mx-2">Facebook</a>
                        <a href="#" className="text-white mx-2">Twitter</a>
                        <a href="#" className="text-white mx-2">Instagram</a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
