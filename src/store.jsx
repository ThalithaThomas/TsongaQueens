import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./redux/addToCartSlice";

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
