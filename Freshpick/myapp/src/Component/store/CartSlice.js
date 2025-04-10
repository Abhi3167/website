import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers:
    {
        mycartdataredux(state, action)
        {
           return  [...state, action.payload]
        }

    }
})

export const {mycartdataredux}=CartSlice.actions
export default CartSlice.reducer