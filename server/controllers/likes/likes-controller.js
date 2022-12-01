import * as likesDao from "./likes-dao.js";

const LikesController = (app) => {
    const userLikesPost = async (req, res) => {
        const uid = req.params.uid;
        const pid = req.params.pid;
        const newLike = await likesDao.userLikesPost(uid, pid);
        res.json(newLike);
    };
    const userUnlikesPost = async (req, res) => {
        const uid = req.params.uid;
        const pid = req.params.pid;
        const status = await likesDao.userUnlikesPost(uid, pid);
        res.send(status);
    };
    const findAllLikes = async (req, res) => {
        const likes = await likesDao.findAllLikes();
        res.json(likes);
    };
    const findPostsLikedByUser = async (req, res) => {
        const uid = req.params.uid;
        const posts = await likesDao.findPostsLikedByUser(uid);
        res.json(posts);
    };
    const findUsersWhoLikedPost = async (req, res) => {
        const pid = req.params.pid;
        const users = await likesDao.findUsersThatLikePost(pid);
        res.json(users);
    };

    app.post("/users/:uid/likes/:pid", userLikesPost);
    app.post("/users/:uid/unlikes/:pid", userUnlikesPost);
    app.get("/likes", findAllLikes);
    app.get("/users/:uid/likes", findPostsLikedByUser);
    app.get("/posts/:pid/likes", findUsersWhoLikedPost);
};

export default LikesController;
