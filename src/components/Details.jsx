import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveToReadList, saveToWishList } from "../utility/localStorage";

const Details = () => {
  const books = useLoaderData();
  const { id } = useParams();
  const book = books.find((book) => book.bookId == id);

  const {bookId, bookName, review, author, image,tags,totalPages,rating,publisher,yearOfPublishing } = book;

  const handleWish = () =>{
    saveToWishList(bookId);
  }
  const handleRead = () =>{
    saveToReadList(bookId);
  }
  return (
    <div className="flex mt-10  mb-20">
      <div className="image w-1/2 p-10 rounded-2xl mr-7"  style={{background: '#9092915c'}}>
        <img src={image} alt="book image" />
      </div>
      <div className="text w-1/2 text-left pr-4">
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="text-2xl py-4">By : {author}</p>

        <p className="text-2xl border-b-2 border-gray-300 border-t-2  py-2 my-2">Fiction</p>

        <p className="text-xl mt-4">
          <span className="font-bold text-white">Review : </span>
          {review}
        </p>

        <div className="tags ml-1 my-7 pb-3 border-b-2 border-gray-300">
           <span className="text-2xl">Tags : </span>
           {
              tags.map((tag,index) => {
               return <>
               <span key={index} className="inline-block px-2 mb-2 mr-3 py-2 rounded-lg text-xl  " style={{background: '#9092915c'}}>{tag}</span>
               </>
              })
           }
       </div>
       <ul className="lists">

        <li className="text-xl py-2"><span className="w-64 inline-block">Number of Pages : </span>
        <span className="text-white">{totalPages}</span>
        </li>
        <li className="text-xl py-2"><span className="w-64 inline-block">Publisher : </span>
        <span className="text-white">{publisher}</span>
        </li>
        <li className="text-xl py-2"><span className="w-64 inline-block">Year of Publishing :   </span>
        <span className="text-white">{yearOfPublishing}</span>
        </li>
        <li className="text-xl py-2"><span className="w-64 inline-block">Rating : </span>
        <span className="text-white">{rating}</span>
        </li>

        

       </ul>
       <div className="buttons pt-6">
    <a  onClick={handleRead} className="btn btn-outline btn-lg">Add to Read</a>
    <a onClick={handleWish} className="btn btn-primary ml-2 btn-lg">Add to WishList</a>
  </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Details;
