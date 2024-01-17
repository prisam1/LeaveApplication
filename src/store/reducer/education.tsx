import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeaveState {
    hsc: any
    collegeName: any;
    board: any;
    yop: any;
}

const initialState: LeaveState = {
    hsc: null,
    collegeName: null,
    board: null,
    yop: null
};

export const EducationSlice = createSlice({
    name: 'Education',
    initialState,
    reducers: {
        setHSC: (state, action: PayloadAction<any>) => {
            state.hsc = action.payload;
        },
        setCollegeName: (state, action: PayloadAction<any>) => {
            state.collegeName = action.payload;
        },
        setBoard: (state, action: PayloadAction<any>) => {
            state.board = action.payload;
        },
        setYOP: (state, action: PayloadAction<any>) => {
            state.yop = action.payload;
        },
    },
});

export default EducationSlice.reducer;
export const { setHSC, setCollegeName, setBoard, setYOP, } = EducationSlice.actions;
