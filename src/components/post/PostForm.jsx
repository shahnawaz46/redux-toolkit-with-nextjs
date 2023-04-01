import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "@/src/redux/Slices/postSlice";
import { nanoid } from "@reduxjs/toolkit";

const PostForm = ({ allUsers }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [userId, setUserId] = useState("");

  const fostHandle = (e) => {
    e.preventDefault();
    console.log("userID", !userId);

    if (!title || !description || !userId) {
      return null;
    }

    // for create Id i am using nanoid which is provided by @reduxjs/toolkit
    dispatch(
      add({
        id: nanoid(10),
        title,
        description,
        userId,
        time: new Date().toISOString(),
        reactions: {
          thumbsup: 0,
          wow: 0,
          heart: 0,
        },
      })
    );

    setTitle("");
    setDescription("");
    setUserId();
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={fostHandle}>
      <input
        type="text"
        placeholder="Enter Title"
        value={title}
        className="w-80 border border-gray-400 p-2 rounded-md outline-none"
        onChange={(e) => setTitle(e.target.value)}
      />
      <select
        className="w-80 border border-gray-400 p-2 rounded-md outline-none"
        onChange={(e) => setUserId(e.target.value)}
      >
        <option value="">Select User</option>
        {allUsers.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <textarea
        type="text"
        placeholder="Enter Description"
        value={description}
        className="w-80 h-36 border border-gray-400 p-2 rounded-md outline-none resize-none"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="bg-black text-white p-2 rounded-md">ADD</button>
    </form>
  );
};

export default PostForm;
