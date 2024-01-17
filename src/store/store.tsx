import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { UserSlice } from './reducer/user';
import { LeaveSlice } from './reducer/leave';
import { EmployeeSlice } from './reducer/employee-details';
import { UIControllerSlice } from './reducer/ui-controller';



export const store = configureStore({
  reducer: {
    user: UserSlice.reducer,
    leave: LeaveSlice.reducer,
    uiController: UIControllerSlice.reducer,
    employee:EmployeeSlice.reducer
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
