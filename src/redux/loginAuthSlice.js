import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginConfrimation: (state, action) => {
      console.log(action.payload , "action.payload")
      if (action.payload == true) {
        state.login = action.payload;
      }
    },
  },
});

export const { loginConfrimation } = loginSlice.actions;

export default loginSlice.reducer;
