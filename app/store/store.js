import { configureStore } from "@reduxjs/toolkit";

 import Categories from "./slices/Categories";
import products from "./slices/products";

export const store = configureStore({

    reducer: {
        categories: Categories,
        products: products
    }
})