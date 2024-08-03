// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/cartSlice";
import loginReducer from "./redux/loginAuthSlice";
import formReducer from './redux/formSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    login: loginReducer,
    form: formReducer,
  },
});
