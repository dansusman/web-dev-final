import { Button, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import PostItem from "../components/post-item";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import BasicPage from "../components/basic-page";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findPostsThunk } from "../posts/posts-thunks";
import { findFollowingThunk } from "../follows/follows-thunks";
import { profileThunk } from "../users/users-thunks";

const Search = () => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.users);
    const { following } = useSelector((state) => state.follows);
    const nav = useNavigate();

    useEffect(() => {
        dispatch(profileThunk());
    });

    useEffect(() => {
        dispatch(findPostsThunk());
        if (currentUser) {
            dispatch(findFollowingThunk(currentUser._id));
        }
    }, [dispatch]);

    const location = useLocation().pathname;
    const splitLocation = location.split("/");
    const searchText = decodeURI(splitLocation[splitLocation.length - 1]);
    if (!searchText || searchText === "search" || searchText === "") {
        nav("/");
        return;
    }
    const repliesContain = (p) => {
        if (p.replies) {
            return p.replies.some((r) =>
                r.content.toLowerCase().includes(searchText)
            );
        }
    };

    const resultsHelper = (input) => {
        return input?.toLowerCase().includes(searchText);
    };

    const results = posts.filter((p) => {
        return (
            resultsHelper(p.title) ||
            resultsHelper(p.content) ||
            resultsHelper(p.location) ||
            resultsHelper(p.conditions) ||
            repliesContain(p)
        );
    });
    return (
        <BasicPage
            user={currentUser}
            children={
                <>
                    {loading && <Heading>Loading ...</Heading>}
                    {!loading && results.length > 0 && (
                        <Stack spacing={5}>
                            <Flex
                                textAlign={"center"}
                                justifyContent={"center"}
                                direction={"column"}
                            >
                                <SimpleGrid
                                    columns={{ base: 1 }}
                                    spacing={"10"}
                                >
                                    {results.map((post, index) => (
                                        <Link
                                            to={`/post/${post._id}`}
                                            key={index}
                                        >
                                            <PostItem
                                                post={post}
                                                index={index}
                                                following={following}
                                                forUser={true}
                                            />
                                        </Link>
                                    ))}
                                </SimpleGrid>
                            </Flex>
                        </Stack>
                    )}
                    {!loading && results.length === 0 && (
                        <Stack spacing={5}>
                            <Stack align={"center"} pt="20">
                                <Heading>
                                    Sorry, there doesn't seem to be anything
                                    here.
                                </Heading>
                                <Button
                                    bg={"blue.400"}
                                    color={"white"}
                                    w="80px"
                                    _hover={{
                                        bg: "blue.500",
                                    }}
                                    onClick={() => nav("/")}
                                >
                                    Retry
                                </Button>
                            </Stack>
                        </Stack>
                    )}
                </>
            }
        />
    );
};

export default Search;
