import axios from "axios";

const USERS_URL = "http://localhost:4000/users";
const LIKES_URL = "http://localhost:4000/users/:uid/likes/:pid";
const BASE_URL = "http://localhost:4000";

export const userLikesPost = async (uid, pid) => {
    const response = await axios.post(`${USERS_URL}/${uid}/likes/${pid}`);
    return response.data;
};

export const userUnlikesPost = async (uid, pid) => {
    const response = await axios.post(`${USERS_URL}/${uid}/unlikes/${pid}`);
    return response.data;
};

export const findUsersThatLikePost = async (pid) => {
    const response = await axios.get(`${BASE_URL}/posts/${pid}/likes`);
    return response.data;
};
