// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
import loginReducer from "./redux/loginAuthSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
  },
});
