import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./posts-service";

export const findPostsThunk = createAsyncThunk(
    "posts/findPosts",
    async (chronological) => await service.findPosts(chronological)
);

export const findPostByIdThunk = createAsyncThunk(
    "posts/findPostById",
    async (pid) => {
        return await service.findPostById(pid);
    }
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

export const findPostsByAuthorThunk = createAsyncThunk(
    "posts/findPostByAuthor",
    async (author) => {
        return await service.findPostsByAuthor(author);
    }
);

export const findPostsLikedByUserThunk = createAsyncThunk(
    "posts/likedByUser",
    async (uid) => {
        return await service.findPostsLikedByUser(uid);
    }
);

export const findPostsByLocationThunk = createAsyncThunk(
    "posts/location",
    async (location) => {
        return await service.findPostsByLocation(location);
    }
);
