import { createSlice } from "@reduxjs/toolkit";
import {
    findUsersThatLikePostThunk,
    userLikesPostThunk,
    userUnlikesPostThunk,
} from "./likes-thunks";

const initialState = {
    likes: [],
    likers: {},
    loading: false,
};

const likesReducer = createSlice({
    name: "likes",
    initialState: initialState,
    reducers: {},
    extraReducers: {
        [userLikesPostThunk.fulfilled]: (state, action) => {
            state.likes.push(action.payload);
        },
        [userUnlikesPostThunk.fulfilled]: (state, action) => {
            const uid = action.payload.uid;
            const pid = action.payload.pid;
            state.likes = state.likes.filter((l) => {
                return l.user !== uid || l.post !== pid;
            });
        },
        [findUsersThatLikePostThunk.fulfilled]: (state, action) => {
            const post = action.payload.post;
            state.likers[post] = action.payload.likers;
        },
    },
});

export default likesReducer.reducer;
