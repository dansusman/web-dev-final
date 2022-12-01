import cors from "cors";
import express from "express";
import session from "express-session";
import PostsController from "./controllers/posts/posts-controller.js";
import UserController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";
import SessionController from "./controllers/session-controller.js";
import LikesController from "./controllers/likes/likes-controller.js";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4,
};

mongoose.connect("mongodb://localhost:27017/smallTalk", options);

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000",
    })
);
app.use(
    session({
        secret: "environment variable",
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false },
    })
);
app.use(express.json());
UserController(app);
PostsController(app);
SessionController(app);
LikesController(app);
app.listen(process.env.PORT || 4000);
