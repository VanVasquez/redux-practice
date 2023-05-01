import React from "react";
import AddPostForm from "./features/posts/AddPostForm";
import PostLists from "./features/posts/PostLists";

const App = () => {
  return (
    <div>
      <AddPostForm />
      <PostLists />
    </div>
  );
};

export default App;
