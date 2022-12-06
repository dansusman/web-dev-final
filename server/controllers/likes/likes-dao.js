import likesModel from "./likes-model.js";

export const userLikesPost = async (uid, pid) => {
    const result = await likesModel.find({ post: pid, user: uid });
    if (result.length > 0) {
        // user already liked this post!
        return;
    }
    return await likesModel.create({ user: uid, post: pid });
};
export const userUnlikesPost = async (uid, pid) => {
    return await likesModel.deleteOne({ user: uid, post: pid });
};
export const findPostsLikedByUser = async (uid) => {
    return await likesModel
        .find({ user: uid }, { user: false })
        .populate("post", [
            "title",
            "content",
            "username",
            "time",
            "location",
            "replies",
            "repliesCount",
            "likesCount",
            "temperature",
            "conditions",
            "weatherIconCode",
        ])
        .exec();
};
export const findUsersThatLikePost = async (pid) => {
    return await likesModel
        .find({ post: pid }, { post: false })
        .populate("user", "username")
        .exec();
};
export const findAllLikes = async () => await likesModel.find();
