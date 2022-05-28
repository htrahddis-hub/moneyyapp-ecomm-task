import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    cart: [],
  },
  status: "idle",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.value.cart.find(
        (item) => item.id === action.payload.id
      );
      const newCart = state.value.cart.filter(
        (item) => item.id !== action.payload.id
      );
      if (item) {
        item.count++;
        state.value.cart = [...newCart, item];
        state.value.cart = state.value.cart.sort((a, b) => a.id - b.id);
      } else {
        state.value.cart = [
          ...state.value.cart,
          { ...action.payload, count: 1 },
        ];
        state.value.cart = state.value.cart.sort((a, b) => a.id - b.id);
      }
    },
    removeFromCart: (state, action) => {
      const item = state.value.cart.find(
        (item) => item.id === action.payload.id
      );
      const newCart = state.value.cart.filter(
        (item) => item.id !== action.payload.id
      );
      if (item.count === 1) {
        state.value.cart = [...newCart];
        state.value.cart = state.value.cart.sort((a, b) => a.id - b.id);
      } else {
        item.count--;
        state.value.cart = [...newCart, item];
        state.value.cart = state.value.cart.sort((a, b) => a.id - b.id);
      }
    },
  },
  extraReducers: {},
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export const getCart = (state) => state.cart.value;

export default cartSlice.reducer;
