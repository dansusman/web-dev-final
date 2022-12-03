import { createSlice } from "@reduxjs/toolkit";
import {
    createPostThunk,
    deletePostThunk,
    findPostByIdThunk,
    findPostsByAuthorThunk,
    findPostsThunk,
    updatePostThunk,
} from "./posts-thunks";

const initialState = {
    post: null,
    posts: [],
    loading: false,
};

const postsSlice = createSlice({
    name: "posts",
    initialState,
    extraReducers: {
        [deletePostThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = state.posts.filter((t) => t._id !== payload);
        },

        [findPostsThunk.pending]: (state) => {
            state.loading = true;
            state.posts = [];
        },
        [findPostsThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        },
        [findPostsThunk.rejected]: (state) => {
            state.loading = false;
        },

        [findPostsByAuthorThunk.pending]: (state) => {
            state.loading = true;
            state.posts = [];
        },
        [findPostsByAuthorThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts = payload;
        },
        [findPostsByAuthorThunk.rejected]: (state) => {
            state.loading = false;
        },

        [findPostByIdThunk.pending]: (state) => {
            state.loading = true;
            state.post = null;
        },
        [findPostByIdThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.post = payload;
        },
        [findPostByIdThunk.rejected]: (state) => {
            state.loading = false;
        },

        [createPostThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.posts.push(payload);
        },
        [updatePostThunk.fulfilled]: (state, { payload }) => {
            state.loading = false;
            const postNdx = state.posts.findIndex((t) => t._id === payload._id);
            state.posts[postNdx] = {
                ...state.posts[postNdx],
                ...payload,
            };
        },
    },
    reducers: {},
});

export default postsSlice.reducer;
