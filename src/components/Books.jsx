import { useEffect, useState } from "react";
import Book from "./Book";

 
const Books = () => {

    const [books , setBooks] = useState([])

    useEffect(()=>{
       fetch('books.json').then(res => res.json()).then(data => setBooks(data))
    },[])


    return (
        <div>
            <h1 className="text-4xl pt-16 pb-12 font-bold">Books : {books.length}</h1>

            <div className="books pb-20 flex flex-wrap gap-4 justify-center">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;