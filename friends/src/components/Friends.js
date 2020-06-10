import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";
import FriendForm from "./FriendForm";
import "./Friends.css";

const Friends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then((res) => setFriends(res.data))
      .catch((err) => console.log(err.message, err.response));
  }, []);
  console.log(friends);
  return (
    <div>
      <h1 className="title">Friends</h1>
      <div className="wrapper">
        <div className="friend-col">
          {friends.map((friend) => {
            return <Friend key={friend.id} friend={friend} />;
          })}
        </div>
        <FriendForm setFriends={setFriends} />
      </div>
    </div>
  );
};

export default Friends;
