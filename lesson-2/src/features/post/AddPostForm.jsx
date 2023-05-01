import { useState } from "react";
import { useDispatch } from "react-redux";
import { postAdded } from "./postSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({ title: "", content: "" });
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSavePostClicked = (e) => {
    const { title, content } = formData;
    e.preventDefault();
    if (!title && !content) {
      //Set error message
      return;
    }
    try {
      dispatch(postAdded(title, content));
      setFormData({ title: "", content: "" });
    } catch (error) {
      console.error(error);
    }
  };

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
        <label htmlFor="postContent">Post Content: </label>
        <input
          type="text"
          id="postContent"
          name="content"
          value={formData.content}
          onChange={handleOnChange}
        />
        <button type="submit">Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
