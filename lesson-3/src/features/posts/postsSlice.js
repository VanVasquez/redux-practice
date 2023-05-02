import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 0,
    title: "van",
    content: "SHHSHH",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 2,
      wow: 30,
      heart: 12,
      rocket: 15,
      coffee: 62,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded: {
      reducer: (state, action) => {
        const { postId, reaction } = action.payload;
        const existingPost = state.find((post) => post.id === postId);
        if (existingPost) existingPost.reactions[reaction]++;
      },
      prepare: (postId, reaction) => {
        return {
          payload: {
            postId,
            reaction,
          },
        };
      },
    },
  },
});

export const selectAllPosts = (state) => state.posts;
export const { reactionAdded, postAdded } = postsSlice.actions;
export default postsSlice.reducer;
