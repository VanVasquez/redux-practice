import React from "react";
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";

const PostAuthor = ({ post }) => {
  const users = useSelector(selectAllUsers);
  const author = users.find((user) => user.id === post.userId);

  return (
    <span key={post.id}>by: {author ? author.name : "unknwon author"}</span>
  );
};

export default PostAuthor;
