import { createSlice } from "@reduxjs/toolkit";

const SearchSlice = createSlice({
    name: 'search',
    initialState: "",
    reducers:
    {
        mysearchdataredux(state, action)
        {
          return state=action.payload
        }

    }
})

export const {mysearchdataredux}=SearchSlice.actions
export default SearchSlice.reducer