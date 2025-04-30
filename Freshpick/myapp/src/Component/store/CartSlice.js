import { createSlice } from '@reduxjs/toolkit';

const storedCart = JSON.parse(localStorage.getItem('cartItems')) || [];

const initialState = {
  items: storedCart,
  total: storedCart.reduce((acc, item) => acc + item.price * item.quantity, 0),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    mycartdataredux: (state, action) => {
      const existing = state.items.find(item => item.name === action.payload.name);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item) item.quantity += 1;
      state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(item => item.name === action.payload.name);
      if (item && item.quantity > 1) item.quantity -= 1;
      state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload.name);
      state.total = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {  mycartdataredux, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;