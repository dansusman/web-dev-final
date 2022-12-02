import axios from "axios";
import _ from "lodash";
// const POSTS_API = "http://localhost:4000/api/posts";
// const POSTS_API = "https://poster-node-server-app.herokuapp.com/api/posts";
const API_BASE = process.env.REACT_APP_API_BASE;
const POSTS_API = `${API_BASE}/posts`;

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
        // const grouped = _.partition(posts, (a) => a.created === undefined);
        // grouped[1].sort((a, b) => b.created > a.created);
        // posts = grouped[1].concat(grouped[0]);
        posts.sort((a, b) => new Date(a.time) > new Date(b.time));
    } else {
        posts.sort((a, b) => parseInt(a.likes) < parseInt(b.likes));
    }
    return posts;
};
