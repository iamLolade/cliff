import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookList = () => {
    const { books } = useContext(BookContext)
    return books.length ? (
        <div className="book-list">
            <ul>
                {books.map(book => (
                    
                ))}
            </ul>
        </div>
    ) : (
        <div className="empty">No books to read</div>
    )
}
 
export default BookList;