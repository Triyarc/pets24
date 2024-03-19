// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { cartData } from "../components/cart/data";

const initialState = {
  cartItems: cartData,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    updateQuantity: (state, action) => {
        const { itemId, quantity } = action.payload;
        const itemToUpdate = state.cartItems.find(item => item.id === itemId);
        if (itemToUpdate) {
          // Ensure quantity is not less than zero
          itemToUpdate.quantity = Math.max(0, quantity);
          // Update total price based on unit price and quantity
          itemToUpdate.totalPrice = itemToUpdate.unitPrice * itemToUpdate.quantity;
        }
      }
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
