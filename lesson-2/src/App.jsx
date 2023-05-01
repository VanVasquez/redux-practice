import React from "react";
import PostList from "./features/post/PostList";
import AddPostForm from "./features/post/AddPostForm";

const App = () => {
  return (
    <div>
      <AddPostForm />
      <PostList />
    </div>
  );
};

export default App;
