import React,{useState} from "react";
import logo from "../assets/booking.png";
import user_png from "../assets/user.png";
import menu_icon from "../assets/menu.png";
import {NavLink} from "react-router-dom"
export default function Nav() {

  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <>
      <div className=" w-full h-[5.4rem] overflow-hidden  flex justify-start align-middle">
        <NavLink to="/" className="ps-8 w-18 h-18">
          <img src={logo} className="w-full h-full" alt="logo-icon" />
        </NavLink>
        
        <div className=" absolute right-10 top-6 ">
   
          <div className="flex">
            <a
              className="me-3 text-xl font-bold text-red-300 "
              href="/users"
            >
              Booked Venues
            </a>
            <button className=" border-2 rounded-full flex " onClick={toggleNav}>
              <img src={menu_icon} className=" w-6 h-6  me-1" alt="menu" />
              <img src={user_png} className=" w-6 h-6 ms-1  " alt="user" />
            </button>
        {toggleMenu && <div className="mt-16 z-50 bg-white absolute top-1 right-8 p-8">
          <NavLink
            className=" hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="/booking"
          >
            Booking
          </NavLink>
          <NavLink
            className="hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="/users"
          >
            Booked users
          </NavLink>

          <NavLink
            className="hover:bg-cyan-100 hover:rounded-md block cursor-pointer p-2"
            to="https://github.com/vignesh-wikki"
          >
            Source
          </NavLink>
          
        </div>
}    
        
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
