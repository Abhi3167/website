import {configureStore} from '@reduxjs/toolkit';
import DetailSlice from './DetailSlics';
const store = configureStore({
    reducer: {
         detail: DetailSlice,
    
        
    }
})
export default store;