import { createSlice } from "@reduxjs/toolkit";



const categories = createSlice({
    name: "categories",
    initialState: {
        content:[]
    },
    reducers: {
        setCategories: (state,action) => {
            state.content=action.payload.categories
        }
    }
})

export const setCategoriesArray= categories.actions.setCategories

export default categories.reducer