import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BookItem = ({ book }) => {
    return (
        <Card className="h-100">
            <Card.Img variant="top" src={book.image} alt={book.title} />
            <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>by {book.author}</Card.Text>
                <Card.Text>
                            Price: {book.price}</Card.Text>
                <Button variant="primary">Add to Cart</Button>
            </Card.Body>
        </Card>
    );
};

export default BookItem;
