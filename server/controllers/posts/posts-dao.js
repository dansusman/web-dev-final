import postsModel from "./posts-model";

export const createPost = async (post) => {
    await postsModel.create(post);
};

export const updatePost = async (pid, postUpdates) => {
    await postsModel.updateOne({ _id: pid }, { $set: postUpdates });
};

export const deletePost = async (pid) => {
    await postsModel.deleteOne({ _id: pid });
};

export const findAllPosts = async () => {
    await postsModel.find();
};

export const findPostsByAuthor = async (author) => {
    await postsModel.find({ author });
};
