import { createSlice } from '@reduxjs/toolkit';

const loadCartState = () => {
  try {
    const serializedState = localStorage.getItem('cart');
    if (serializedState === null) {
      return {
        items: [],
        isCartOpen: false
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load cart state", err);
    return {
      items: [],
      isCartOpen: false
    };
  }
};

const saveCartState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('cart', serializedState);
  } catch (err) {
    console.error("Could not save cart state", err);
  }
};

const initialState = loadCartState();

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, img } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ 
          id, 
          title, 
          price: Number(price), // Убедимся, что цена - число
          img,
          quantity: 1 
        });
      }
      saveCartState(state);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
      saveCartState(state);
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
      saveCartState(state);
    },
    toggleCart: (state) => {
      state.isCartOpen = !state.isCartOpen;
      saveCartState(state);
    },
    clearCart: (state) => {
      state.items = [];
      saveCartState(state);
    }
  }
});

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  toggleCart,
  clearCart 
} = cartSlice.actions;

export default cartSlice.reducer;