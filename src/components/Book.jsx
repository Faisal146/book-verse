import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const Book = (book) => {

    const {bookId, bookName , image , tags , author,category, rating} = book.book
    return (
        <Link to={`/details/${bookId}`} className="book text-left border-2 border-gray-500 rounded-lg" style={{width: '380px'}}>
        <div className="image rounded-lg m-3 p-3 " style={{height: '200px' ,background: '#9092915c'}}>
            <img className="max-h-full mx-auto"  src={image} alt="" />
        </div>
        <div className="tags ml-1 my-7">
           
            {
               tags.map((tag,index) => {
                return <>
                <span key={index} className="inline-block px-2 mx-1 py-2 rounded-lg " style={{background: '#9092915c'}}>{tag}</span>
                </>
               })
            }
        </div>
        <div className="title mx-3">
            <h1 className="text-2xl mb-2">{bookName}</h1>
            <p className="text-lg pb-4 border-dashed border-gray-400 border-b-2">By : {author}</p>
        </div>
        <div className="category mx-3 py-4 flex justify-between text-xl ">
            <span>{category}</span>
            <span className="flex items-center gap-3">{rating}  <FaStar />
</span>
        </div>
    </Link>
    );
};

export default Book;