import { Button, Heading, Stack } from "@chakra-ui/react";

import BasicPage from "../components/basic-page";
import { Link } from "react-router-dom";
import PostItem from "../components/post-item";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findPostsThunk } from "../posts/posts-thunks";
import RepliesStream from "../components/replies-stream";
import CreateReply from "../components/create-reply";
import { profileThunk } from "../users/users-thunks";

const Post = () => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk());
        dispatch(profileThunk());
    }, [dispatch]);
    const location = useLocation().pathname;
    const splitLocation = location.split("/");
    const postId = parseInt(splitLocation[splitLocation.length - 1]);
    const post = posts.find((p) => {
        return parseInt(p._id) === postId;
    });
    return (
        <BasicPage
            user={currentUser}
            children={
                <>
                    {loading && <Heading>Loading ...</Heading>}
                    {!loading && post && (
                        <Stack spacing={10}>
                            <Link to={`/post/${post._id}`} key={post._id}>
                                <PostItem
                                    post={post}
                                    currentUser={currentUser}
                                    index={post._id}
                                />
                            </Link>
                            <CreateReply post={post} />
                            <RepliesStream
                                post={post}
                                replies={post.replies || []}
                            />
                        </Stack>
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
