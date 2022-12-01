import { createSlice } from "@reduxjs/toolkit";
import {
    findUsersThatLikePostThunk,
    userLikesPostThunk,
} from "../services/likes-thunks";

const initialState = {
    likes: [],
    likers: [],
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
        [findUsersThatLikePostThunk.fulfilled]: (state, action) => {
            state.likers = action.payload;
        },
    },
});

export default likesReducer.reducer;
