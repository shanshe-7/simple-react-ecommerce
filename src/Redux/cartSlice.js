import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'id',
  initialState: [],
  reducers: {
    pushCurrenItem: {
      reducer: (state, action) => {
        const index = state.findIndex((e) => e.id === action.payload.id);
        if (index === -1) {
          state.push({ ...action.payload, quantity: 1 });
        }
      },
      prepare: (item) => {
        return {
          payload: item,
        };
      },
    },
    deleteItem: {
      reducer: (state, action) => {
        state.splice(action.payload, 1);
      },
      prepare: (idx) => {
        return {
          payload: idx,
        };
      },
    },
    addQuantity: {
      reducer: (state, action) => {
        if (state[action.payload].quantity < 15) {
          state[action.payload].quantity = state[action.payload].quantity + 1;
        }
      },
      prepare: (idx) => {
        return {
          payload: idx,
        };
      },
    },

    subtractQuantity: {
      reducer: (state, action) => {
        if (state[action.payload].quantity > 1) {
          state[action.payload].quantity = state[action.payload].quantity - 1;
        }
      },
      prepare: (idx) => {
        return {
          payload: idx,
        };
      },
    },
  },
});

export const {
  pushCurrenItem,
  deleteItem,
  addQuantity,
  subtractQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
