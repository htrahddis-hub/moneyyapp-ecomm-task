import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const url = "https://fakestoreapi.com/products";

export const getProduct = createAsyncThunk("products/getProduct", async () => {
  try {
    const products = await axios.get(url);
      return products.data;
  } catch (err) {
    console.log(err);
  }
});

// export const 