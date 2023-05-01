import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: "0",
    title: "First Post",
    content: "Hello! this is my first post",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
  {
    id: "1",
    title: "Slice",
    content: "Solid Slices as always",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author: userId,
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
  },
});

export const selectAllPosts = (state) => state.posts;

export default postSlice.reducer;
