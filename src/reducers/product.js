import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "../actions/product";

const initialState = {
  value: {
    products: [],
  },
  status: "idle",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addReview: (state, action) => {
      const item = state.value.find(
        (item) => item.id === action.payload.product.id
      );
      const newCart = state.value.filter(
        (item) => item.id !== action.payload.product.id
      );
      if (item) {
        item.review.push(action.payload.review);
        state.value = [...newCart, item];
        state.value.cart = state.value.cart.sort((a, b) => a.id - b.id);
      } else {
        state.value = [...state.value, { ...action.payload, review: [action.payload.review] }];
        state.value.cart = state.value.cart.sort((a, b) => a.id - b.id);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.status = "idle";
      state.value = action.payload;
      console.log(state.value);
    });
  },
});

export const { addReview } = productSlice.actions;

export const selectProducts = (state) => state.products.value;

export default productSlice.reducer;
