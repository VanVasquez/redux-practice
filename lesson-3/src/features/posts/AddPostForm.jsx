import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    userId: "",
  });
  const [error, setError] = useState("");
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnPost = (e) => {
    e.preventDefault();
    setError("");
    const { title, content, userId } = formData;
    if (!title || !content) {
      return setError("Fill up the fields");
    }
    dispatch(postAdded(title, content, userId));
    setFormData({
      title: "",
      content: "",
      userId: "",
    });
  };

  const usersOption = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h1>New Post</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleOnPost}>
        <label htmlFor="postTitle">
          Title:
          <input
            type="text"
            id="postTitle"
            name="title"
            value={formData.title}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="postContent">
          Content:
          <textarea
            name="content"
            id="postContent"
            rows="1"
            value={formData.content}
            onChange={handleOnChange}
          />
        </label>
        <label htmlFor="postAuthor">
          Select Author:
          <select
            name="userId"
            id="postAuthor"
            value={formData.userId}
            onChange={handleOnChange}
          >
            <option value=""></option>
            {usersOption}
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default AddPostForm;
