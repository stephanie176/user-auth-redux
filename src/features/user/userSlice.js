import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  registeredUser: null,
  currentUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.registeredUser = action.payload;
      localStorage.setItem('registeredUser', JSON.stringify(action.payload));
    },
    loginUser: (state, action) => {
      state.currentUser = action.payload;
    },
    loadUserFromStorage: (state) => {
      const user = JSON.parse(localStorage.getItem('registeredUser'));
      if (user) state.registeredUser = user;
    },
  },
});

export const { registerUser, loginUser, loadUserFromStorage } = userSlice.actions;
export default userSlice.reducer;
