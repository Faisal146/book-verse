import { FaUserFriends, FaFileAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import { getItemsReadList } from "../utility/localStorage";
import { useState, useEffect } from "react";

const Readlist = () => {
  const [readList, setReadList] = useState([]);

  const books = useLoaderData();

  useEffect(() => {
    const storedItems = getItemsReadList();

    if (storedItems.length > 0) {
      const readItems = books.filter((book) =>
        storedItems.includes(book.bookId)
      );

      //  console.log(ReadItems)
      setReadList(readItems);
    }
  }, []);

  return (
    <div className="items mb-20">
      {readList.map((book) => {
        return (
          <>
            <div className="item flex my-4 border-2 border-gray-400 rounded-2xl text-left">
        <div
          className="image w-80 h-60 m-3 p-3 rounded-2xl"
          style={{ background: "#9092915c" }}
        >
          <img className="max-h-full" src={book.image} alt="image" />
        </div>
        <div className="text  w-full m-3">
          <h1 className="text-3xl pb-2 font-bold">
            {book.bookName}
          </h1>
          <p className="text-lg">{book.author}</p>

          <div className="tags flex items-center mt-4">
            
          {
              book.tags.map((tag,index) => {
               return <>
               <span key={index} className="inline-block px-4 mb-2 mr-3 py-2 rounded-lg  " style={{background: '#9092915c'}}>{tag}</span>
               </>
              })
           }

            <span className="flex text-lg items-center gap-2 ml-5">
              <FaClock /> Year Of Publishing : 1920
            </span>
          </div>

          <div className="publisher mt-4 text-gray-400 flex">
            <span className="flex text-lg items-center gap-2">
              <FaUserFriends /> Publisher: Scribner
            </span>
            <span className="flex text-lg items-center gap-2 ml-6">
              <FaFileAlt /> Page: 192
            </span>
          </div>

          <div className="buttons border-t-2 pt-2 border-gray-500  mt-2">
            <span className="inline-block px-4 mx-1 py-2 rounded-full text-white bg-gray-700">
              Category: Classic
            </span>
            <span className="inline-block px-4 mx-1 py-2 rounded-full text-white bg-gray-700">
              Rating: 4.5
            </span>
            <Link  to={`/details/${book.bookId}`} className="inline-block px-4 mx-1 py-2 text-white bg-green-700 ml-4 rounded-full">
              View Details
            </Link>
          </div>
        </div>
      </div>
          </>
        );
      })}

      
    </div>
  );
};

export default Readlist;
