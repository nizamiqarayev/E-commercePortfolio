import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const products = createSlice({
    name: "categorySpecificProducts",
    initialState: {
        content: [],
        categorySpecificProducts: [],
        
    },
    reducers: {
        setCategorySpecificProducts: (state, action) => {
            console.log(`https://izzi-ecom.herokuapp.com/products/product/${action.payload.id}`);
            const response = axios.get(`https://izzi-ecom.herokuapp.com/products/0`)
            console.log(response);
            // state.content=
        },
        setProducts: async (state, action) => {
            console.log(`https://izzi-ecom.herokuapp.com/products/product/${action.payload.id}`);
            const response = await axios.get(`https://izzi-ecom.herokuapp.com/products/product/${action.payload.id}`).then((response)=>{console.log(response);})
            // state.content=
        }
    }
})

export const setCategorySpecificProductsDispatch= products.actions.setCategorySpecificProducts

export default products.reducer