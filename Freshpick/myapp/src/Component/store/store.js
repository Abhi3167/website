import {configureStore} from '@reduxjs/toolkit';
import CategorySlice from './category_slice';
import SearchSlice from './Searchslice';
import DetailSlice from './DetailSlics';
import CartSlice from './CartSlice'
import OderSlice from './oderSlice';
const store = configureStore({
    reducer: {
         detail: DetailSlice,
         category: CategorySlice,
          search: SearchSlice,
          cart:CartSlice,
          oder:OderSlice,
    }
})
export default store;