import React, { useState } from "react";
import axios from "axios";
import axiosWithAuth from "../utils/axiosWithAuth";
import "./FriendForm.css";

const FriendForm = ({setFriends}) => {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });

  const handleChange = (e) => {
    setFriend({ ...friend, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", friend)
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err));
    setFriend({ name: "", age: "", email: "" });
  };

  return (
    <div>
      <h1>Add a Friend</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          name="name"
          type="text"
          id="name"
          value={friend.name}
          onChange={handleChange}
        />
        <input
          placeholder="Age"
          name="age"
          type="text"
          id="age"
          value={friend.age}
          onChange={handleChange}
        />
        <input
          placeholder="Email "
          name="email"
          type="email"
          id="email"
          value={friend.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
};

export default FriendForm;
