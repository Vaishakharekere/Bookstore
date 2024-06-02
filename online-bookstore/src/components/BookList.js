import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import BookItem from './BookItem';

const BookList = ({ books }) => {
    return (
        <Container>
            <Row>
                {books.map((book, index) => (
                    <Col key={index} md={3} className="mb-4">
                        <BookItem book={book} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default BookList;
