import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeaveState {
    organization: any
    name: any;
    email: any;
    jobTitle: any;
    ownership: any;
    gender: any;
    dob: any;
    aadhar: any;
    pan: any;
    city: any;
    state: any;
    zipCode: any;
    country: any
    address: any;

}

const initialState: LeaveState = {
    organization: null,
    name: null,
    email: null,
    jobTitle: null,
    ownership: null,
    gender: null,
    dob: null,
    aadhar: null,
    pan: null,
    city: null,
    state: null,
    zipCode: null,
    country: null,
    address: null
};

export const EmployeeSlice = createSlice({
    name: 'Employee',
    initialState,
    reducers: {
        setOrganization: (state, action: PayloadAction<any>) => {
            state.organization = action.payload;
        },
        setName: (state, action: PayloadAction<any>) => {
            state.name = action.payload;
        },
        setEmail: (state, action: PayloadAction<any>) => {
            state.email = action.payload;
        },
        setJobTitle: (state, action: PayloadAction<any>) => {
            state.jobTitle = action.payload;
        },
        setOwnership: (state, action: PayloadAction<any>) => {
            state.ownership = action.payload;
        },
        setGender: (state, action: PayloadAction<any>) => {
            state.gender = action.payload;
        },
        setDOB: (state, action: PayloadAction<any>) => {
            state.dob = action.payload;
        },
        setAadhar: (state, action: PayloadAction<any>) => {
            state.aadhar = action.payload;
        },
        setPAN: (state, action: PayloadAction<any>) => {
            state.pan = action.payload;
        },
        setCity: (state, action: PayloadAction<any>) => {
            state.city = action.payload;
        },
        setState: (state, action: PayloadAction<any>) => {
            state.state = action.payload;
        },
        setZipCode: (state, action: PayloadAction<any>) => {
            state.zipCode = action.payload;
        },
        setCountry: (state, action: PayloadAction<any>) => {
            state.country = action.payload;
        },
        setAddress: (state, action: PayloadAction<any>) => {
            state.address = action.payload;
        },
    },
});

export default EmployeeSlice.reducer;
export const { setOrganization, setName, setEmail, setJobTitle, setOwnership, setGender, setDOB, setAadhar, setPAN, setCity, setState, setZipCode, setCountry, setAddress } = EmployeeSlice.actions;
