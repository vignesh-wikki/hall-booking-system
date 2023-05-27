import React, { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import axios from "axios";
import {useNavigate} from "react-router-dom"
export default function Users() {
  const navigate = useNavigate();
 const [del_id,setDel_id] = useState(null);

  const deleteUser = ()=>{
    setDel_id(users.FirstName)
   
  }
  
useEffect(()=>{
  const id = axios.delete("https://hall-booking-system.onrender.com/deleteuser",del_id)
 navigate("/users");
},[del_id])
  var i = 0;
  const [users, setUsers] = useState([]);

   
  useEffect(() => {
   axios
      .get("https://hall-booking-system.onrender.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  
  }, []);
  
  return (

    <>
      <Nav />
      
                  {users.length > i && (
                    <div>

                      {users.map((user, e) => (
                        <>


                        <div  className="min-h-screen bg-gray-50 flex flex-col justify-center relative overflow-hidden sm:py-12">
  <div  className="max-w-7xl mx-auto">
    <div  className="relative group">
      <div  className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
       <div  className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
        <svg  className="w-8 h-8 text-purple-600" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.75 6.75C6.75 5.64543 7.64543 4.75 8.75 4.75H15.25C16.3546 4.75 17.25 5.64543 17.25 6.75V19.25L12 14.75L6.75 19.25V6.75Z"></path>
        </svg>
        <div className="space-y-2">
           <div className=" list-none   justify-center " key={e}>
                        <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">FirstName : {user.FirstName}</li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">LastName : {user.LastName}</li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">college : {user.college} </li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">phoneNumber : {user.phoneNumber} </li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">numberOfMembers : {user.numberOfMembers}</li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">audioSystem : {user.audioSystem} </li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">gender : {user.gender}</li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">date : {user.date}</li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">FromTime : {user.FromTime} </li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">ToTime : {user.ToTime}</li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">GuestName : {user.GuestName}</li>
                          <li className=" tracking-[.10rem] uppercase text-lg font-monospace text-purple-400 text-center leading-10">GuestType : {user.GuestType} </li>
                          <div className="rounded-xl bg-purple-500 text-lg text-white m-3 flex justify-center"> <button onClick={deleteUser} className="p-2  ">Delete booked user</button>
                        </div></div>
                         
                    
                    
        </div>
        </div>
      </div>
    </div>
  </div>

                      </>  ))}
                    
                       </div>
                  )}
                
</>
    )}






                       

                 


          
  
