import { createSlice } from '@reduxjs/toolkit';

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {name:'js is hear'}, // Remove the extra comma here
    genera: {}, // Remove the extra comma here
  },
  reducers: {
    getApiConfigration: (state, action) => {
      state.url = action.payload;
    },
    getGenerers: (state, action) => {
      state.genera = action.payload;
    }
  },
});

// Action creators are generated for each case reducer function
export const { getApiConfigration, getGenerers } = homeSlice.actions;

export default homeSlice.reducer;
