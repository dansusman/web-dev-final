import mongoose from "mongoose";

const repliesSchema = mongoose.Schema(
    {
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
        },
        post: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "PostModel",
        },
        username: String,
        content: String,
    },
    { collection: "replies" }
);

export default repliesSchema;
