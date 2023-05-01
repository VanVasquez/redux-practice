import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    userId: "",
  });

  const users = useSelector(selectAllUsers);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnSubmit = (event) => {
    const { title, content, userId } = formData;
    event.preventDefault();
    if (!title && !content) {
      //Set error message
      return;
    }
    try {
      dispatch(postAdded(title, content, userId));
      setFormData({ title: "", content: "", userId: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const canSave =
    Boolean(formData.title) &&
    Boolean(formData.content) &&
    Boolean(formData.userId);

  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor="postTitle">Post Title: </label>
        <input
          type="text"
          id="postTitle"
          name="title"
          value={formData.title}
          onChange={handleOnChange}
        />

        <label htmlFor="postAuthor">Post Author: </label>
        <select
          name="userId"
          id="postAuthor"
          value={formData.userId}
          onChange={handleOnChange}
        >
          <option value=""></option>
          {userOptions}
        </select>

        <label htmlFor="postContent">Post Content: </label>
        <input
          type="text"
          id="postContent"
          name="content"
          value={formData.content}
          onChange={handleOnChange}
        />
        <button type="submit" disabled={!canSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
