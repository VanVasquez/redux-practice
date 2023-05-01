const { createSlice } = require("@reduxjs/toolkit");

const initialState = [{ id: "0", name: "Van Gagogh" }];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
