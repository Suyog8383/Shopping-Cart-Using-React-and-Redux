import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../reducer/counterSlice";
import productsReducer from "../reducer/cartSystem";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: productsReducer,
  },
});
