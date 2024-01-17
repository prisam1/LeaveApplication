import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UIControllerState {
  leaveManagement: string;
  reload: boolean;
  userInput:any;
}

const initialState: UIControllerState = {
  leaveManagement: '',
  reload: true,
  userInput:''
};

export const UIControllerSlice = createSlice({
  name: 'UIController',
  initialState,
  reducers: {
    setLeaveManagement: (state, action: PayloadAction<any>) => {
      state.leaveManagement = action.payload;
    },
    setAppReload: (state, action: PayloadAction<any>) => {
      state.reload = action.payload;
    },
    setUserInput: (state, action: PayloadAction<any>) => {
      state.userInput = action.payload;
    },
  },
});

export default UIControllerSlice.reducer;
export const {
  setLeaveManagement,
  setAppReload,
  setUserInput,
} = UIControllerSlice.actions;
