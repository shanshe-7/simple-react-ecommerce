import { createSlice } from '@reduxjs/toolkit';

const idSlise = createSlice({
  name: 'id',
  initialState: { value: '' },
  reducers: {
    retrieve: {
      reducer: (state, action) => {
        state.value = action.payload;
      },
      prepare: (retrivedId) => {
        return {
          payload: {
            retrivedId,
          },
        };
      },
    },
  },
});

export const { retrieve } = idSlise.actions;
export default idSlise.reducer;
