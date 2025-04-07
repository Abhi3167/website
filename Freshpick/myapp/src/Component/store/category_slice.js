import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'category',
    initialState: []  ,
    reducers:
    {
        mycategorydataredux(state, action)
        {
          return state=action.payload
        }

    }
})

export const {mycategorydataredux}=CategorySlice.actions
export default CategorySlice.reducer