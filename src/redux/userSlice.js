import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: 0,
    loading: false,
    error: false,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true;
        },
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
        },
        loginFailure: (state) => {
            state.loading = false;
            state.loading = true;
        },
        logout: (state) => {
            state.value = null;
            state.loading = false;
            state.loading = true;
        },

    },
});

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer;

