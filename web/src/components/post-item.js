import {
    Avatar,
    Button,
    chakra,
    CloseButton,
    Flex,
    Heading,
    HStack,
    Stack,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { followUserThunk } from "../follows/follows-thunks";
import { deletePostThunk } from "../posts/posts-thunks";
import { findUserByIdThunk } from "../users/users-thunks";
import Interactions from "./interactions";
import PostBorder from "./post-border";

const PostItem = ({ post, currentUser }) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const dateStamp = post.time;
    const timePretty = useMemo(() => {
        let timePretty = "";
        if (dateStamp != null && currentUser) {
            var options = { hour12: !currentUser.twentyFour };
            timePretty = new Date(dateStamp).toLocaleString("en-US", options);
        }
        return timePretty;
    }, [dateStamp, currentUser]);
    const deleteHandler = (id) => {
        dispatch(deletePostThunk(id));
    };
    const imageGenerator = () => {
        const username = post.username;
        const url = `https://ui-avatars.com/api/?background=random&name=${username}`;
        return url;
    };

    const handleFollow = () => {
        if (!currentUser) {
            nav("/login");
            return;
        }
        dispatch(followUserThunk({ followed: post.author }));
    };

    return (
        <PostBorder>
            <Flex
                direction={"column"}
                textAlign={"left"}
                justifyContent={"space-between"}
            >
                <HStack>
                    <Heading size="lg">{post.title}</Heading>
                    {timePretty !== "" && (
                        <chakra.p fontWeight={"medium"} color={"gray.500"}>
                            {timePretty}
                        </chakra.p>
                    )}
                </HStack>
                <chakra.p fontWeight={"medium"} fontSize={"15px"} pt={4} pb={4}>
                    {post.content}
                </chakra.p>
                <Interactions post={post} />
            </Flex>
            <Stack
                ms="5"
                me="5"
                spacing={0}
                align="center"
                minW="100px"
                onClick={(e) => e.preventDefault()}
            >
                <div
                    onClick={(e) => {
                        e.preventDefault();
                        nav(`/profile/${post.author}`);
                    }}
                >
                    <Avatar
                        src={imageGenerator()}
                        height={"80px"}
                        width={"80px"}
                    />
                    <chakra.p fontWeight={"medium"} color={"gray.500"}>
                        @{post.username}
                    </chakra.p>
                </div>
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        handleFollow();
                    }}
                >
                    Follow
                </Button>
            </Stack>
            {((currentUser && currentUser?._id === post.author) ||
                currentUser?.type === "Moderator") && (
                <CloseButton
                    position="absolute"
                    right={"4"}
                    top={"4"}
                    onClick={(e) => {
                        e.preventDefault();
                        deleteHandler(post._id);
                    }}
                    backgroundColor={"transparent"}
                    _hover={{
                        bg: "transparent",
                    }}
                />
            )}
        </PostBorder>
    );
};

export default PostItem;
