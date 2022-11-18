import cors from "cors";
import express from "express";
import PostsController from "./controllers/posts/posts-controller.js";
import UserController from "./controllers/users/users-controller.js";

const app = express();
app.use(cors());
app.use(express.json());
UserController(app);
PostsController(app);
app.listen(process.env.PORT || 4000);
