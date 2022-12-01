import mongoose from "mongoose";

const postsSchema = mongoose.Schema(
    {
        title: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "UserModel",
        },
        content: String,
        time: Date,
        location: String,
        repliesCount: Number,
        likesCount: Number,
        temperature: String,
        conditions: String,
        weatherIconCode: String,
    },
    { collection: "posts" }
);

export default postsSchema;
