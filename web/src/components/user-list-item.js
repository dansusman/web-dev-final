import { Text } from "@chakra-ui/react";
import React from "react";
const UserListItem = ({ user, followed }) => {
    const username = followed ? user.followed.username : user.follower.username;
    return <Text>{username}</Text>;
};

export default UserListItem;
