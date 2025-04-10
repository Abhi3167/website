import {configureStore} from '@reduxjs/toolkit';
import CategorySlice from './category_slice';
import SearchSlice from './Searchslice';
import DetailSlice from './DetailSlics';
import CartSlice from './CartSlice'
const store = configureStore({
    reducer: {
         detail: DetailSlice,
         category: CategorySlice,
          search: SearchSlice,
          cart:CartSlice,
    }
})
export default store;