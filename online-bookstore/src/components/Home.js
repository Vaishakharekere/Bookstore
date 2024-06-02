import React from 'react';
import { Container, Row, Col, Carousel, Button } from 'react-bootstrap';

const Home = () => {
    const featuredBooks = [
        { title: 'The War of Swords', author: 'D Barkley Briggs ', image: 'Novel2.jpg' },
        { title: 'The Four Insights', author: ' Alberto Villoldo', image: 'Novel5.jpg' },
        { title: 'The Last Collection', author: 'Jeanne Mackin', image: 'Novel9.jpg'},
        { title: 'The Book of Lost Friends ', author: 'Lisa Wingate', image: 'Novel7.jpg' },
    ];

    return (
        <Container>
            <Carousel className="mt-4">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="bg.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>The Light</h3>
                        <p>My Journey to Heaven And Back.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="Richdad.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Rich Dad Poor Dad</h3>
                        <p>The Guide To Personal Finance.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="bg3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>The Dark</h3>
                        <p>Madness Rages as The Light Begin to Fade.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <section className="featured-books mt-5">
                <h2 className="mb-4 text-center">Featured Books</h2>
                <Row>
                    {featuredBooks.map((book, index) => (
                        <Col key={index} md={3} className="mb-4">
                            <div className="card h-100">
                                <img src={book.image} className="card-img-top" alt={book.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{book.title}</h5>
                                    <p className="card-text">by {book.author}</p>
                                    <Button variant="primary">Add to Cart</Button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </section>
        </Container>
    );
};

export default Home;
