import React, { useState } from "react";

const FriendForm = () => {
  const [friend, setFriend] = useState({ name: "", age: "", email: "" });
  
  return (
    <form onSubmit={() => {}}>
      <input name="name" type="text" id="name" value={friend.name} />
      <input name="age" type="text" id="age" value={friend.age} />
      <input name="email" type="email" id="email" value={friend.email} />
      <button type="submit">Add Friend</button>
    </form>
  );
};

export default FriendForm;
