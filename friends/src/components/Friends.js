import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

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
    </div>
  );
};

export default Friends;
