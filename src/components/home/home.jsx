import { Button } from "react-bootstrap";
import { useState } from "react";
import Login from "../login/login";
import "./home.css";
export const loginInfo = {
  email: "whymalick@gmail.com",
  password: "Malick123"
}
function Home() {
  return (
    <>
      <div className="home-body">
        <h3>Welcome to my login application</h3>
        <p>Login below</p>
        <Login/>
      </div>
    </>
  );
}

export default Home;
