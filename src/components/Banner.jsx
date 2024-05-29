import React from "react";

const Banner = () => {
  return (
    <div className="flex items-center my-5 p-5 rounded-xl justify-evenly " style={{background: '#9092915c'}}>
      <div className="text text-left">
        <h1 className=" text-6xl text-left  font-bold">
          {" "}
          Books to freshen up <br />
          your bookshelf
        </h1>
        <button className="btn btn-lg btn-success mt-10 ">View The List</button>
      </div>
      <div className="image" style={{ width: "400px" }}>
        <img
          src="https://i.ibb.co/RvNz2mD/lord.png"
          alt="banner image"
        />
      </div>
    </div>
  );
};

export default Banner;
