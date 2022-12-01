import * as dao from "./users-dao.js";
import { findByCredentials, findByUsername } from "./users-dao.js";

let currentUser = null;

const UserController = (app) => {
    app.get("/api/users", findAllUsers);
    app.get("/api/users/name/:username", findUserByUsername);
    app.get("/api/users/:uid", findUserById);
    app.post("/api/users", createUser);
    app.delete("/api/users/:uid", deleteUser);
    app.put("/api/users/:uid", updateUser);

    app.post("/api/register", register);
    app.post("/api/login", login);
    app.post("/api/logout", logout);
    app.post("/api/profile", profile);
};

const findAllUsers = async (req, res) => {
    const users = await dao.findAllUsers();
    res.json(users);
};

const findUserById = async (req, res) => {
    const uid = req.params.uid;
    const user = await dao.findUserById(uid);
    res.json(user);
};

const findUserByUsername = async (req, res) => {
    const username = req.params.username;
    const user = await dao.findByUsername(username);
    res.json(user);
};

const createUser = async (req, res) => {
    const newUser = req.body;
    //   newUser._id = new Date().getTime() + "";
    const actualUser = await dao.createUser(newUser);
    res.json(actualUser);
};

const deleteUser = async (req, res) => {
    const uid = req.params.uid;
    const status = await dao.deleteUser(uid);
    res.json(status);
};

const updateUser = async (req, res) => {
    const uid = req.params.uid;
    const updates = req.body;
    const status = await dao.updateUser(uid, updates);
    res.json(status);
};

const register = async (req, res) => {
    const user = req.body;
    if (!user.username) {
        res.sendStatus(403);
        return;
    }
    const existing = await findByUsername(user.username);
    if (existing) {
        res.sendStatus(403);
        return;
    }
    const registered = await dao.createUser(user);
    currentUser = registered;
    req.session["currentUser"] = registered;
    res.json(registered);
};

const login = async (req, res) => {
    const credentials = req.body;
    const existing = await findByCredentials(
        credentials.username,
        credentials.password
    );
    if (!existing) {
        res.sendStatus(403);
        return;
    }
    currentUser = existing;
    res.json(existing);
};

const logout = (req, res) => {
    currentUser = null;
    res.sendStatus(200);
};

const profile = (req, res) => {
    const user = req.session["currentUser"];
    if (user) {
        res.json(user);
        return;
    }
    res.sendStatus(403);
};

export default UserController;
