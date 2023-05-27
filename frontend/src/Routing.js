import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Booking_form from "./Bookingform";
import App from "./App";
import Users from "./Components/Users"

function Routing() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<App />}></Route>
        <Route path="/booking" element={<Booking_form />}></Route>
        <Route path="/users" element={<Users />}></Route>
      </Routes>
    </Router>
  );
}

export default Routing;
