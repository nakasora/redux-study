import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";
// 買い物かごの初期化
const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      return {
        cartItems: [],
        amount: 0,
        total: 0,
      };
    },
    removeItem: (state, { payload }) => {
      const itemId = payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
      // return {
      //   cartItems: fileteredItems,
      //   amount: state.amount -1,
      //   total: state.total -
      // }
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload);
      cartItem.amount = cartItem.amount - 1;
    },
    caluculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});
console.log(cartSlice);
export const { clearCart, removeItem, increase, decrease, caluculateTotals } =
  cartSlice.actions;
export default cartSlice.reducer;
