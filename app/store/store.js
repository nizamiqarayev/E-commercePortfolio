import { configureStore } from "@reduxjs/toolkit";

 import Categories from "./slices/Categories";

export const store = configureStore({

    reducer: {
        categories: Categories
    }
})