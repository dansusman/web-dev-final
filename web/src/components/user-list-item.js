import { Button, HStack, Spacer, Text } from "@chakra-ui/react";
import React from "react";
const UserListItem = ({ user, followed, showFollowButton }) => {
    const username = followed ? user.followed.username : user.follower.username;
    return (
        <HStack>
            <Text>{username}</Text>
            <Spacer />

            {showFollowButton && (
                <Button variant={"solid"} colorScheme="purple">
                    Follow
                </Button>
            )}
        </HStack>
    );
};

export default UserListItem;
