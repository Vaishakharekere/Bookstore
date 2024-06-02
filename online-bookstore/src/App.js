import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import BookList from './components/BookList';
import './App.css';

const App = () => {
    const [books] = useState([
        { title: 'The Conscious Mind', author: 'Author 1',price:'$9.99',image: 'Conscious.jpeg' },
        { title: 'The War of Swords', author: 'D Barkley Briggs ',price:'$9.99',  image: 'Novel2.jpg' },
        { title: 'The Complete Novels of Jane Austen', author: 'Jane Austen',price:'$9.99',  image: 'Novel3.jpeg' },
        { title: 'Mind Control', author: 'Dr.Joseph Murphy',price:'$9.99',  image: 'Novel4.jpg' },
        { title: 'The Four Insights', author: ' Alberto Villoldo',price:'$9.99',  image: 'Novel5.jpg' },
        { title: 'Creative Mind', author: 'Ernest S Homes',price:'$9.99',  image: 'Novel6.jpeg' },
        { title: 'Friction', author: 'E R Frank',price:'$9.99',  image: 'Novel8.jpg' },
        { title: 'The Last Collection', author: 'Jeanne Mackin',price:'$9.99' , image: 'Novel9.jpg'}
    ]);

    return (
        <Router>
            <div>
                <Header />
                <main className="my-4">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/books" element={
                            <section className="book-grid mt-5">
                                <h2 className="mb-4 text-center">All Books</h2>
                                <BookList books={books} />
                            </section>
                        } />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
