import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./posts-service";

export const findPostsThunk = createAsyncThunk(
    "posts/findPosts",
    async () => await service.findPosts(true)
);

export const createPostThunk = createAsyncThunk(
    "posts/createPost",
    async (post) => await service.createPost(post)
);
export const deletePostThunk = createAsyncThunk(
    "posts/deletePost",
    async (postId) => {
        await service.deletePost(postId);
        return postId;
    }
);

export const updatePostThunk = createAsyncThunk(
    "posts/updatePost",
    async (post) => await service.updatePost(post)
);
