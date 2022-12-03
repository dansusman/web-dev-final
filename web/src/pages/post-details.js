import { Button, Heading, Stack } from "@chakra-ui/react";

import BasicPage from "../components/basic-page";
import { Link } from "react-router-dom";
import PostItem from "../components/post-item";
import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { findPostByIdThunk, findPostsThunk } from "../posts/posts-thunks";
import RepliesStream from "../components/replies-stream";
import CreateReply from "../components/create-reply";
import { findAllUsersThunk, profileThunk } from "../users/users-thunks";

const Post = () => {
    const { loading } = useSelector((state) => state.postsData);
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const { pid } = useParams();
    const { post } = useSelector((state) => state.postsData);

    useEffect(() => {
        dispatch(findAllUsersThunk());
        dispatch(profileThunk());
        dispatch(findPostByIdThunk(pid));
    }, []);

    return (
        <BasicPage
            user={currentUser}
            children={
                <>
                    {loading && <Heading>Loading ...</Heading>}
                    {!loading && post && (
                        <Stack spacing={10}>
                            <Link to={`/post/${post?._id}`} key={post?._id}>
                                <PostItem post={post} />
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
