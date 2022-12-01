import cors from "cors";
import express from "express";
import session from "express-session";
import PostsController from "./controllers/posts/posts-controller.js";
import UserController from "./controllers/users/users-controller.js";
import mongoose from "mongoose";
import SessionController from "./controllers/session-controller.js";
mongoose.connect("mongodb://localhost:27017/smallTalk");

const app = express();
app.use(cors());
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
app.listen(process.env.PORT || 4000);
