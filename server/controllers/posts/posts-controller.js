import posts from "./posts.js";

const PostsController = (app) => {
    app.post("/api/posts", createPost);
    app.get("/api/posts", findPosts);
    app.get("/api/posts/:tid", findPostById);
    app.put("/api/posts/:tid", updatePost);
    app.delete("/api/posts/:tid", deletePost);
};
const createPost = (req, res) => {
    const newPost = req.body;
    newPost._id = new Date().getTime() + "";
    newPost.likes = 0;
    newPost.dislikes = 0;
    newPost.liked = false;
    newPost.disliked = false;
    newPost.reposts = 0;
    newPost.replies = 0;
    posts.push(newPost);
    res.json(newPost);
};

const findPosts = (req, res) => {
    res.json(posts);
};

const updatePost = (req, res) => {
    const postIdToUpdate = req.params.tid;
    const updates = req.body;
    const postIndex = posts.findIndex(
        (t) => t._id.toString() === postIdToUpdate
    );
    posts[postIndex] = { ...posts[postIndex], ...updates };
    res.sendStatus(200);
};

const deletePost = (req, res) => {
    const postIdToDelete = req.params.tid;
    posts = posts.filter((t) => t._id.toString() !== postIdToDelete);
    res.sendStatus(200);
};

const findPostById = (req, res) => {
    const postId = req.params.tid;
    const post = posts.find((t) => t._id.toString() === postId);
    res.json(post);
};

export default PostsController;
