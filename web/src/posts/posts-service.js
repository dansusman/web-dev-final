import axios from "axios";
import _ from "lodash";
// const POSTS_API = "http://localhost:4000/api/posts";
// const POSTS_API = "https://poster-node-server-app.herokuapp.com/api/posts";
const API_BASE = process.env.REACT_APP_API_BASE;
const POSTS_API = `${API_BASE}/posts`;
const USERS_URL = "http://localhost:4000/users";

const api = axios.create({ withCredentials: true });

export const createPost = async (post) => {
    const response = await api.post(`${POSTS_API}`, post);
    return response.data;
};
export const deletePost = async (pid) => {
    const response = await api.delete(`${POSTS_API}/${pid}`);
    return response.data;
};

export const updatePost = async (post) => {
    await api.put(`${POSTS_API}/${post._id}`, post);
    return post;
};

export const findPosts = async (chronological) => {
    const response = await api.get(POSTS_API);
    let posts = response.data;
    if (chronological) {
        posts.sort((a, b) => {
            return new Date(a.time) <= new Date(b.time);
        });
    }
    return posts;
};

export const findPostById = async (pid) => {
    const response = await api.get(`${POSTS_API}/${pid}`);
    return response.data;
};

export const findPostsByAuthor = async (author) => {
    const response = await api.get(`${API_BASE}/users/${author}/posts`);
    return response.data;
};

export const findPostsLikedByUser = async (uid) => {
    const url = `${USERS_URL}/${uid}/likes`;
    const response = await api.get(url);
    return response.data;
};

export const findPostsByLocation = async (location) => {
    const response = await api.get(`${POSTS_API}/location/${location}`);
    return response.data;
};
