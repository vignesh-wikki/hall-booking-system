import React,{useContext} from "react";
import {Link} from "react-router-dom";

export default function Cards(data) {
  
  return (
    <div >
      <div className=" cursor-pointer ms-4 mt-5 mb-20 w-[15rem] h-[15rem] bg-white   rounded-lg dark:bg-gray-800 dark:border-gray-700">
        <Link to="/booking" className="w-full h-full">
          <img
            className="rounded-lg w-full h-full object-cover hover:scale-90 transition-all duration-500"
            src={data.img}
            alt="card_img"
          />
        </Link>

        <div className="">
          <p className="mt-2 mb-2 font-bold text-black ">{data.title}</p>
          <p className=" text-normal  text-gray-400 ">
           {data.type}
          </p>
          <p className="mt-2 mb-4 font-semibold text-black ">Acadamic</p>
        </div>
      </div>
    </div>
  );
}
