import { createSlice } from "@reduxjs/toolkit";

const DetailSlice = createSlice({
    name: 'detail',
    initialState: [],
    reducers:
    {
        myproductdataredux(state, action)
        {
          return state=action.payload
        }

    }
})

export const {myproductdataredux}=DetailSlice.actions
export default DetailSlice.reducer