import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const handleInput = (event) => {
    setPwd(event.target.value);
  };
  const handleInputs = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (e) => {
    alert("submited");
    e.preventDefault();
    const res = await axios
      .post(
        "http://localhost:5000/register",
        { email: email, password: pwd },
        {
          headers: {
            "content-type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <form
        action="/register"
        method="post"
        onSubmit={handleSubmit}
        className=""
      >
        <label>email</label>
        <input type="text" name="email" onChange={handleInputs} />
        <label> password</label>

        <input type="password" name="password" onChange={handleInput} />
        <button type="submit">Sing in </button>
      </form>
    </>
  );
}
