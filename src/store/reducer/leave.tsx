import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeaveState {
  startDate: any;
  endDate: any;
  leaveStatus: any;
  referenceNumber: any;
  leaveReason: any;
  leaveType: any;
  leaveId: any;
  leave: any;
  compID: any;
  createdBy: any
  year: any;
  leaveVisible: boolean;
  leaveAproved: boolean;
  leaveRequest: boolean;

}

const initialState: LeaveState = {
  startDate: null,
  endDate: null,
  leaveStatus: [],
  referenceNumber: null,
  leaveReason: null,
  leaveType: null,
  leaveId: null,
  leave: [],
  compID: null,
  createdBy: null,
  year: null,
  leaveVisible: false,
  leaveAproved: false,
  leaveRequest: false

};

export const LeaveSlice = createSlice({
  name: 'Leave',
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<any>) => {
      state.startDate = action.payload;
    },
    setEndDate: (state, action: PayloadAction<any>) => {
      state.endDate = action.payload;
    },
    setLeaveStatus: (state, action: PayloadAction<any>) => {
      state.leaveStatus = action.payload;
    },
    setReferenceNumber: (state, action: PayloadAction<any>) => {
      state.referenceNumber = action.payload;
    },
    setLeaveReason: (state, action: PayloadAction<any>) => {
      state.leaveReason = action.payload;
    },
    setLeaveType: (state, action: PayloadAction<any>) => {
      state.leaveType = action.payload;
    },
    setLeaveId: (state, action: PayloadAction<any>) => {
      state.leaveId = action.payload;
    },
    setLeave: (state, action: PayloadAction<any>) => {
      state.leave = action.payload;
    },
    setCompID: (state, action: PayloadAction<any>) => {
      state.compID = action.payload;
    },
    setCreatedBy: (state, action: PayloadAction<any>) => {
      state.createdBy = action.payload;
    },
    setYear: (state, action: PayloadAction<any>) => {
      state.year = action.payload;
    },
    setLeaveVisible: (state, action: PayloadAction<any>) => {
      state.leaveVisible = action.payload;
    },
    setLeaveAproved: (state, action: PayloadAction<any>) => {
      state.leaveAproved = action.payload;
    },
    setLeaveRequest: (state, action: PayloadAction<any>) => {
      state.leaveRequest = action.payload;
    },
  },
});

export default LeaveSlice.reducer;
export const { setLeaveRequest, setCompID, setCreatedBy, setYear, setStartDate, setEndDate, setLeaveStatus, setReferenceNumber, setLeaveReason, setLeaveType, setLeaveId, setLeave, setLeaveVisible, setLeaveAproved } = LeaveSlice.actions;
