import { Button, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
const UserListItem = ({ user, followed }) => {
    const username = followed ? user.followed.username : user.follower.username;
    return (
        <HStack>
            <Text>{username}</Text>
            <Spacer />
            <Button variant={"solid"} colorScheme="purple">
                Follow
            </Button>
        </HStack>
    );
};

export default UserListItem;
