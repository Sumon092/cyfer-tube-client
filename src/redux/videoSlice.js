import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    loading: false,
    error: false,
}

export const videoSlice = createSlice({
    name: 'video',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.loading = true;
        },
        logout: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.loading = false;
        },

    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = videoSlice.actions;
export default videoSlice.reducer;

