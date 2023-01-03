const { createSlice } = require("@reduxjs/toolkit");

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    deleteUser(state) {
      state.user = "";
    },
  },
});

export const { setUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
