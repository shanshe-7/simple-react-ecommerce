import { configureStore } from '@reduxjs/toolkit';
import idReducer from './idSlice';
import cartReducer from './cartSlice';

export default configureStore({
  reducer: {
    id: idReducer,
    cart: cartReducer,
  },
});
