import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        {/* <input type="text" placeholder="Username" /><br />
        <input type="password" placeholder="Password" /><br /> */}
        <button type="submit">Login</button>
      </form>
      <br />
      <Link to="/home">Back to Home</Link>
    </div>
  );
}
