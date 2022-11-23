import axios from "axios";
const BASE_URL = "http://localhost:4000";

export const createUser = async () => {};

export const findAllUsers = async () => {
  const response = await axios.get("http://localhost:4000/api/users");
  return response.data;
};

export const register = async (user) => {
  const response = await axios.post(`${BASE_URL}/api/register`, user);
  return response.data;
};

export const login = async (user) => {
  const response = await axios.post(`${BASE_URL}/api/login`, user);
  return response.data;
};

export const profile = async () => {
  const response = await axios.post(`${BASE_URL}/api/profile`);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post(`${BASE_URL}/api/logout`);
  return response.data;
};

export const deleteUser = async (uid) => {
  const response = await axios.delete(`${BASE_URL}/api/users/${uid}`);
  return response.data;
};

export const updateUser = async (uid, userUpdates) => {
  const response = await axios.put(
    `${BASE_URL}/api/users/${uid}`,
    userUpdates
  );
  return response.data;
};
