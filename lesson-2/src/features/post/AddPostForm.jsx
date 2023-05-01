import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postAdded } from "./postSlice";
import { selectAllUsers } from "../user/userSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    userId: "",
  });

  const users = useSelector(selectAllUsers);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSavePostClicked = (e) => {
    const { title, content, userId } = formData;
    e.preventDefault();
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
  console.log(formData);
  const userOptions = users.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  return (
    <section>
      <h2>Add post</h2>
      <form onSubmit={onSavePostClicked}>
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
