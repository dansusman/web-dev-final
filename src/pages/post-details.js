import { Button, Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import NavigationSidebar from "../components/navigation-sidebar";
import PostItem from "../components/post-item";
import posts from "../dummyData/posts.json";

const Post = () => {
    const location = useLocation().pathname;
    const splitLocation = location.split("/");
    const postId = parseInt(splitLocation[splitLocation.length - 1]);
    const post = posts.find((p) => {
        return p._id === postId;
    });
    return (
        <NavigationSidebar>
            {post && (
                <Link to={`/post/${post._id}`} key={post._id}>
                    <PostItem {...post} index={post._id} />
                </Link>
            )}
            {!post && (
                <Stack align={"center"} pt="20">
                    <Heading>
                        Sorry, there doesn't seem to be anything here.
                    </Heading>
                    <Button
                        bg={"blue.400"}
                        color={"white"}
                        w="80px"
                        _hover={{
                            bg: "blue.500",
                        }}
                    >
                        <Link to={"/"}>Retry</Link>
                    </Button>
                </Stack>
            )}
        </NavigationSidebar>
    );
};

export default Post;
