import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ankit",
  mobile: "7247078841",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeName(state, action) {
      return { ...state, name: action.payload };
    },
    changeMobile(state, action) {
      return { ...state, mobile: action.payload };
    },
  },
});

export const { changeName, changeMobile } = userSlice.actions;
export default userSlice.reducer;
