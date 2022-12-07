import { Button, HStack, Spacer } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
const UserListItem = ({ user, followed, showFollowButton }) => {
    const username = followed ? user.followed.username : user.follower.username;
    const uid = followed ? user.followed._id : user.follower._id;
    const nav = useNavigate();
    return (
        <HStack>
            <Button onClick={() => nav(`/profile/${uid}`)}>{username}</Button>
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
