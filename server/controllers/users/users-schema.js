import mongoose from "mongoose";

const usersSchema = mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        type: { type: String, enum: ["User", "Moderator"] },
        twentyFour: Boolean,
        metric: Boolean,
        location: String,
    },
    { collection: "users" }
);

export default usersSchema;
