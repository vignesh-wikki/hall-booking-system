import React from "react";
import Nav from "./Components/Nav";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";



  const data1 = {
    img: "https://images.unsplash.com/photo-1596522354195-e84ae3c98731?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    type: "AC, modern",
    title: "Vishwaraya hall",
    hall:"HALL1"
  }
  const data2 = {
    img: "https://images.unsplash.com/photo-1575029644286-efb9039cac46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    type: "AC/non-AC, classic",
    title: "seminar hall 0",
    hall:"HALL2"
  }
  const data3 = {
    img: "https://images.unsplash.com/photo-1576436978289-3bcb91a03710?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbmZlcmVuY2UlMjBoYWxsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    type: "non-AC, traditional",
    title: "seminar hall 1",
    hall:"HALL3"
  }
 const data4 = {
    img: "https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29uZmVyZW5jZSUyMGhhbGx8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60",
    type: "AC/non-AC, advanced",
    title: "seminar hall 2",
    hall:"HALL4"
  }


export default function App() { 
  
  return (
    <div className="min-h-screen" >
      <Nav />
      <div className="flex justify-center flex-wrap mb-20" >
    <div>
          <Cards {...data1}/></div>
          <Cards {...data2}/>
          <Cards {...data3}/>
          <Cards {...data4}/>
       
</div>

 <div className=" mt-auto">
      <Footer /></div>
    </div>
  );
}

