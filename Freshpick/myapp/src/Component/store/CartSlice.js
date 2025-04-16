import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0
    },
    reducers: {
        // Add item or increase quantity if it exists
        mycartdataredux(state, action) {
            const { name, price } = action.payload;
            const existingItem = state.items.find(item => item.name === name && item.price === price);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            CartSlice.caseReducers.calculateTotal(state);
        },

        // Remove item from cart
        removeFromCart(state, action) {
            const { name, price } = action.payload;
            state.items = state.items.filter(item => item.name !== name || item.price !== price);
            CartSlice.caseReducers.calculateTotal(state);
        },

        // Manually set quantity
        updateQuantity(state, action) {
            const { name, price, quantity } = action.payload;
            const item = state.items.find(item => item.name === name && item.price === price);
            if (item && quantity > 0) {
                item.quantity = quantity;
            }
            CartSlice.caseReducers.calculateTotal(state);
        },

        // Increment quantity by 1
        incrementQuantity(state, action) {
            const { name, price } = action.payload;
            const item = state.items.find(item => item.name === name && item.price === price);
            if (item) {
                item.quantity += 1;
            }
            CartSlice.caseReducers.calculateTotal(state);
        },

        // Decrement quantity by 1
        decrementQuantity(state, action) {
            const { name, price } = action.payload;
            const item = state.items.find(item => item.name === name && item.price === price);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else if (item) {
                // Remove item if quantity goes to 0
                state.items = state.items.filter(i => i.name !== item.name || i.price !== item.price);
            }
            CartSlice.caseReducers.calculateTotal(state);
        },

        // Clear entire cart
        clearCart(state) {
            state.items = [];
            state.total = 0;
        },

        // Calculate total price
        calculateTotal(state) {
            state.total = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        }
    }
});

export const {
    mycartdataredux,
    removeFromCart,
    updateQuantity,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    calculateTotal
} = CartSlice.actions;

export default CartSlice.reducer;