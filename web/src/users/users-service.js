import axios from "axios";
const BASE_URL = "http://localhost:4000";

const api = axios.create({ withCredentials: true });

export const createUser = async () => {};

export const findAllUsers = async () => {
    const response = await api.get(`${BASE_URL}/api/users`);
    return response.data;
};

export const findUserByUsername = async (username) => {
    if (username === "") {
        return null;
    }
    const response = await api.get(`${BASE_URL}/api/users/name/${username}`);
    return response.data;
};

export const register = async (user) => {
    const response = await api.post(`${BASE_URL}/api/register`, user);
    return response.data;
};

export const login = async (user) => {
    const response = await api.post(`${BASE_URL}/api/login`, user);
    return response.data;
};

export const profile = async () => {
    const response = await api.post(`${BASE_URL}/api/profile`);
    return response.data;
};

export const logout = async () => {
    const response = await api.post(`${BASE_URL}/api/logout`);
    return response.data;
};

export const deleteUser = async (uid) => {
    const response = await api.delete(`${BASE_URL}/api/users/${uid}`);
    return response.data;
};

export const updateUser = async (userUpdates) => {
    const url = `${BASE_URL}/api/users/${userUpdates._id}`;
    const response = await api.put(url, userUpdates);
    return userUpdates;
};

export const findUserById = async (uid) => {
    const response = await api.get(`${BASE_URL}/api/users/${uid}`);
    return response.data;
};
