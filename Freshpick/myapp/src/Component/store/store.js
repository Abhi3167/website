import {configureStore} from '@reduxjs/toolkit';
import CategorySlice from './category_slice';
import DetailSlice from './DetailSlics';
const store = configureStore({
    reducer: {
         detail: DetailSlice,
         category: CategorySlice,
        
    }
})
export default store;