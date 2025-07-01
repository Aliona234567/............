import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import profileReducer from './profileSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    profile: profileReducer
  }
});

export default store; 