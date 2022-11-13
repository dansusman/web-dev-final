import { Button, Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import NavigationSidebar from "../components/navigation-sidebar";
import PostBorder from "../components/post-border";

const posts = [{ id: 0, title: "Hello", text: "whjoa" }];

const Post = () => {
    const location = useLocation().pathname;
    const splitLocation = location.split("/");
    const postId = parseInt(splitLocation[splitLocation.length - 1]);
    const post = posts.find((p) => {
        return p.id === postId;
    });
    return (
        <NavigationSidebar>
            {post && (
                <PostBorder>
                    <Stack>
                        <Heading mb={4}>{post.title}</Heading>
                        <Box mb={6}>{post.text}</Box>
                    </Stack>
                </PostBorder>
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
