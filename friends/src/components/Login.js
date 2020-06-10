import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Login = (props) => {
  const [login, setLogin] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/login", login)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => console.log(err.message, err.response));
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          id="name"
          name="username"
          value={login.username}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="password"
          id="password"
          name="password"
          value={login.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Login;
