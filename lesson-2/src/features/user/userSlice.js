import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "0", name: "Van Gagogh" }];

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.user;

export default userSlice.reducer;
