import React, { useContext } from 'react'
import { BookContext } from '../contexts/BookContext';


const BookDetails = ({ book }) => {
    const { removeBook } = useContext(BookContext)
    return ( 
        <li className="book-details">
            <div>
                <div className="title">{ book.title }</div>
                <div className="author">{ book.author }</div>
            </div>
            <div className="bin"><img src="images/bin.png" alt="bin" onClick={() => removeBook(book.id)} /></div>
        </li>
     );
}
 
export default BookDetails;