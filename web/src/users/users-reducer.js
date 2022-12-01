import { createSlice } from "@reduxjs/toolkit";
import {
    profileThunk,
    logoutThunk,
    findAllUsersThunk,
    loginThunk,
    registerThunk,
    updateUserThunk,
    findUserByUsernameThunk,
} from "../services/users-thunks";

const usersReducer = createSlice({
    name: "users",
    initialState: {
        loading: false,
        users: [],
        currentUser: null,
        existing: null,
        error: null,
    },
    reducers: {},
    extraReducers: {
        [findAllUsersThunk.fulfilled]: (state, action) => {
            state.users = action.payload;
        },
        [findUserByUsernameThunk.fulfilled]: (state, action) => {
            state.existing = action.payload;
        },
        [findUserByUsernameThunk.rejected]: (state, action) => {
            state.existing = null;
            state.error = action.payload;
        },
        [loginThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [loginThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.currentUser = null;
        },
        [registerThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [registerThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.currentUser = null;
        },
        [logoutThunk.fulfilled]: (state, action) => {
            state.currentUser = null;
        },
        [updateUserThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [updateUserThunk.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [profileThunk.fulfilled]: (state, action) => {
            state.currentUser = action.payload;
        },
        [profileThunk.rejected]: (state, action) => {
            state.error = action.payload;
            state.currentUser = null;
        },
    },
});

export default usersReducer.reducer;
