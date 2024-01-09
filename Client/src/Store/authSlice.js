import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    isAdmin: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isAuthenticated = true;
            state.isAdmin = action.payload.isAdmin;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.isAdmin = false;
        }
    }
})

export const authActions = authSlice.actions;
export default authSlice;