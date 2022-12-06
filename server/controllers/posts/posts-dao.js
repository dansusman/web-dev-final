import postsModel from "./posts-model.js";

export const createPost = async (post) => {
    return await postsModel.create(post);
};

export const updatePost = async (pid, postUpdates) => {
    return await postsModel.updateOne({ _id: pid }, { $set: postUpdates });
};

export const deletePost = async (pid) => {
    return await postsModel.deleteOne({ _id: pid });
};

export const findAllPosts = async () => {
    return await postsModel.find();
};

export const findPostsByAuthor = async (author) => {
    return await postsModel.find({ author });
};

export const findPostById = async (pid) => {
    return await postsModel.findById(pid);
};

export const findPostsByLocation = async (location) => {
    return await postsModel.find({ location: location });
};
