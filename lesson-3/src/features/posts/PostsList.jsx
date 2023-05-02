import React from "react";
import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date));

  const renderPosts = orderPosts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.content.substring(0, 100)}</p>
      <div>
        <PostAuthor post={post} />
        <TimeAgo timestamp={post.date} />
      </div>
      <ReactionButton post={post} />
    </article>
  ));

  return (
    <section>
      <h1>Posts</h1>
      {renderPosts}
    </section>
  );
};

export default PostsList;
