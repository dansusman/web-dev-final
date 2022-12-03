import axios from "axios";

const USERS_URL = "http://localhost:4000/users";
const LIKES_URL = "http://localhost:4000/users/:uid/likes/:pid";
const BASE_URL = "http://localhost:4000";

export const userLikesPost = async (uid, pid) => {
    const url = `${USERS_URL}/${uid}/likes/${pid}`;
    const response = await axios.post(url);
    return response.data;
};

export const userUnlikesPost = async (uid, pid) => {
    const url = `${USERS_URL}/${uid}/unlikes/${pid}`;
    const response = await axios.post(url);
    return response.data;
};

export const findUsersThatLikePost = async (pid) => {
    const url = `${BASE_URL}/posts/${pid}/likes`;
    const response = await axios.get(url);
    return response.data;
};
