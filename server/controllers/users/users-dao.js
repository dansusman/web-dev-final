import usersModel from "./users-model.js";

export const findAllUsers = () => usersModel.find();
export const findUserById = (uid) => usersModel.findById(uid);
export const findByUsername = (username) =>
  usersModel.findOne({ username });

export const findByCredentials = (username, password) =>
  usersModel.findOne({ username, password }, { password: false });

export const createUser = (user) => usersModel.create(user);

export const updateUser = (uid, updates) =>
  usersModel.updateOne({ _id: uid }, { $set: updates });

export const deleteUser = (uid) => usersModel.deleteOne({ _id: uid });

export const register = async (user) => {
  const existing = await findByUsername(user.username);
  if (!existing) {
    return createUser(user);
  }
};
