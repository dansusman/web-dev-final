import items from "./posts.js";
import * as dao from "./posts-dao.js";
// let posts = items;

const PostsController = (app) => {
    app.post("/api/posts", createPost);
    app.get("/api/posts", findPosts);
    app.get("/api/users/:author/posts", findPostsByAuthor);
    app.get("/api/posts/location/:location", findPostsByLocation);
    app.get("/api/posts/:pid", findPostById);
    app.put("/api/posts/:pid", updatePost);
    app.delete("/api/posts/:pid", deletePost);
};
const createPost = async (req, res) => {
    const newPost = req.body;
    const currentUser = req.session["currentUser"];
    newPost.author = currentUser._id;
    newPost.replies = [];
    newPost.repliesCount = 0;
    const actual = await dao.createPost(newPost);
    res.json(actual);
    // const newDate = new Date();
    // newPost._id = new Date().getTime() + "";
    // newPost.likes = 0;
    // newPost.dislikes = 0;
    // newPost.liked = false;
    // newPost.disliked = false;
    // newPost.reposts = 0;
    // newPost.repliesCount = 0;
    // newPost.created = newDate;
    // newPost.updated = newDate;
    // posts.push(newPost);
    // res.json(newPost);
};

const findPosts = async (req, res) => {
    const posts = await dao.findAllPosts();
    res.json(posts);
};

const updatePost = async (req, res) => {
    const postIdToUpdate = req.params.pid;
    const updates = req.body;
    const status = await dao.updatePost(postIdToUpdate, updates);
    res.json(status);
    // const newDate = new Date();
    // const postIndex = posts.findIndex(
    //     (t) => t._id.toString() === postIdToUpdate
    // );
    // posts[postIndex] = {
    //     ...posts[postIndex],
    //     ...updates,
    //     updated: newDate,
    // };
    // res.sendStatus(200);
};

const deletePost = async (req, res) => {
    const postIdToDelete = req.params.pid;
    const status = await dao.deletePost(postIdToDelete);
    res.json(status);
};

const findPostById = async (req, res) => {
    const pid = req.params.pid;
    const post = await dao.findPostById(pid);
    if (post) {
        res.json(post);
        return;
    }
    res.sendStatus(404);
};

const findPostsByAuthor = async (req, res) => {
    const author = req.params.author;
    const posts = await dao.findPostsByAuthor(author);
    if (posts) {
        res.json(posts);
        return;
    }
    res.sendStatus(404);
};

const findPostsByLocation = async (req, res) => {
    const location = req.params.location;
    const posts = await dao.findPostsByLocation(location);
    if (posts) {
        res.json(posts);
        return;
    }
    res.sendStatus(404);
};

export default PostsController;
