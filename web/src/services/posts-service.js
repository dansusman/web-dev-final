import axios from "axios";
// const POSTS_API = "http://localhost:4000/api/posts";
// const POSTS_API = "https://poster-node-server-app.herokuapp.com/api/posts";
const API_BASE = process.env.REACT_APP_API_BASE;
const POSTS_API = `${API_BASE}/posts`;

export const createPost = async (post) => {
    const response = await axios.post(`${POSTS_API}`, post);
    return response.data;
};
export const deletePost = async (tid) => {
    const response = await axios.delete(`${POSTS_API}/${tid}`);
    return response.data;
};

export const updatePost = async (post) => {
    await axios.put(`${POSTS_API}/${post._id}`, post);
    return post;
};

export const findPosts = async () => {
    const response = await axios.get(POSTS_API);
    const posts = response.data;
    return posts;
};
