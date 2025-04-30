import { createSlice } from "@reduxjs/toolkit";

const OderSlice = createSlice({
    name: 'oder',
    initialState: {
        oder: '',
    },
    reducers: {
       
        allOders(state, action) {
                state.oder=action.payload
           
        }
    }})
    export const {
        allOders,
      
    } = OderSlice.actions;
    
    export default OderSlice.reducer;