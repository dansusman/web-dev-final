import mongoose from "mongoose";

const postsSchema = mongoose.Schema(
    {
        title: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
        },
        username: String,
        content: String,
        time: Date,
        location: String,
        repliesCount: Number,
        likesCount: Number,
        temperature: String,
        conditions: String,
        weatherIconCode: String,
        replies: Array,
        repliesCount: Number,
    },
    { collection: "posts" }
);

export default postsSchema;
