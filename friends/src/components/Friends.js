import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import Friend from "./Friend";

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
      <h1>Friends</h1>
      {friends.map((friend) => {
        return <Friend key={friend.id} friend={friend} />;
      })}
    </div>
  );
};

export default Friends;
