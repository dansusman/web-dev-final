import { createSlice } from "@reduxjs/toolkit";
import {
    findFollowersThunk,
    findFollowingThunk,
    followUserThunk,
} from "./follows-thunks";

const followsReducer = createSlice({
    name: "follows",
    initialState: {
        following: [],
        followers: [],
        reload: false,
    },
    extraReducers: {
        [followUserThunk.fulfilled]: (state, { payload }) => {
            state.followers.push(payload);
            state.reload = !state.reload;
        },
        [findFollowersThunk.fulfilled]: (state, { payload }) => {
            state.followers = payload;
        },
        [findFollowingThunk.fulfilled]: (state, { payload }) => {
            state.following = payload;
        },
    },
});

export default followsReducer.reducer;
