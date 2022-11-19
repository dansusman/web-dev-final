import { Button, Heading, Stack } from "@chakra-ui/react";

import BasicPage from "../components/basic-page";
import { Link } from "react-router-dom";
import PostItem from "../components/post-item";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findPostsThunk } from "../services/posts-thunks";

const Post = () => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk());
    }, [dispatch]);
    const location = useLocation().pathname;
    const splitLocation = location.split("/");
    const postId = parseInt(splitLocation[splitLocation.length - 1]);
    const post = posts.find((p) => {
        return p._id === postId;
    });
    return (
        <BasicPage
            children={
                <>
                    {loading && <Heading>Loading ...</Heading>}
                    {!loading && post && (
                        <Link to={`/post/${post._id}`} key={post._id}>
                            <PostItem post={post} index={post._id} />
                        </Link>
                    )}
                    {!loading && !post && (
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
                </>
            }
        />
    );
};

export default Post;
