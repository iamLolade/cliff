import React, { createContext, useReducer } from "react";
import { v1 as uuidv1 } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer([]);

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}
 
export default BookContextProvider;