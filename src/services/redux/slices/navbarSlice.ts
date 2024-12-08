import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  expand: false,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    expandMenuReducer: (state) => {
      state.expand = !state.expand;
      console.log(state.expand);
    },
  },
});

export const { expandMenuReducer } = navbarSlice.actions;
export default navbarSlice.reducer;