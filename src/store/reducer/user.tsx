import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  user: any;
  isLoggedIn: boolean;

}

const initialState: UserState = {
  user: {},
  isLoggedIn: false,

};

export const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setIsLoggedIn: (state, action: PayloadAction<any>) => {
      state.isLoggedIn = action.payload;
    },

  },
});

export default UserSlice.reducer;
export const { setUser, setIsLoggedIn } = UserSlice.actions;
