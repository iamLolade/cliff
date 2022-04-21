import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
    const { books } = useContext(BookContext);

    return ( 
        <div className="nav">
            <h1>Cliff</h1>
            <p>Currently you have { books.length } { books.length === 1 ? `book` : `books`} to get through...</p>
        </div>
     );
}
 
export default Navbar;