import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
    const { books } = useContext(BookContext);

    return ( 
        <div className="nav">
            <div className="head">
                <h1>Cliff</h1><span className="logo"><img src="/images/read.png" alt="logp" /></span>
            </div>
            <p>Currently you have { books.length } { books.length === 1 ? `book` : `books`} to get through...</p>
        </div>
     );
}
 
export default Navbar;