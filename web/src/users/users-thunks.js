import { createAsyncThunk } from "@reduxjs/toolkit";
import {
    findAllUsers,
    register,
    login,
    logout,
    profile,
    updateUser,
    findUserByUsername,
    findUserById,
    deleteUser,
} from "../users/users-service";

export const findAllUsersThunk = createAsyncThunk(
    "findAllUsers",
    async () => await findAllUsers()
);

export const findUserByUsernameThunk = createAsyncThunk(
    "findUserByUsername",
    async (username) => await findUserByUsername(username)
);

export const registerThunk = createAsyncThunk(
    "register",
    async (user) => await register(user)
);

export const logoutThunk = createAsyncThunk(
    "logout",
    async () => await logout()
);

export const loginThunk = createAsyncThunk(
    "login",
    async (user) => await login(user)
);
export const profileThunk = createAsyncThunk(
    "profile",
    async () => await profile()
);

export const updateUserThunk = createAsyncThunk(
    "users/update",
    async (changes) => {
        return await updateUser(changes);
    }
);

export const findUserByIdThunk = createAsyncThunk(
    "findUserById",
    async (uid) => await findUserById(uid)
);

export const deleteUserThunk = createAsyncThunk("users/delete", async (uid) => {
    const response = await deleteUser(uid);
    if (response.deletedCount > 0) {
        return uid;
    }
});
