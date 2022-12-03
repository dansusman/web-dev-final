import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    findUsersThatLikePost,
    userLikesPost,
    userUnlikesPost,
} from "./likes-service";

export const userLikesPostThunk = createAsyncThunk(
    "userLikesPost",
    async (like) => {
        return await userLikesPost(like.uid, like.pid);
    }
);

export const userUnlikesPostThunk = createAsyncThunk(
    "userUnlikesPost",
    async (like) => {
        return await userUnlikesPost(like.uid, like.pid);
    }
);

export const findUsersThatLikePostThunk = createAsyncThunk(
    "findUsersThatLikePost",
    async (pid) => {
        const likers = await findUsersThatLikePost(pid);
        return {
            post: pid,
            likers: likers,
        };
    }
);
