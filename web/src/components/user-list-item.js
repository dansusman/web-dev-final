import { Button, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const UserListItem = ({ user, followed, showFollowButton }) => {
    const username = followed ? user.followed.username : user.follower.username;
    const uid = followed ? user.followed._id : user.follower._id;
    return (
        <HStack>
            <Link to={`/profile/${uid}`}>{username}</Link>
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
