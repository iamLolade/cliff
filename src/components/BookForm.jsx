import React, { useState, useContext } from 'react'
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch({type: "ADD_BOOK", book: {
            title, author
        }})
        setTitle("");
        setAuthor("");
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Book Title"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Author's Name"
                name="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
            />
            <button>Add Book</button>
        </form>
     );
}
 
export default BookForm;