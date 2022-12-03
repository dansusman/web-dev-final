import { Button, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import PostItem from "../components/post-item";
import React, { useEffect } from "react";
import { useLocation } from "react-router";
import BasicPage from "../components/basic-page";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { findPostsThunk } from "../posts/posts-thunks";

const Search = () => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(findPostsThunk());
    }, [dispatch]);
    const location = useLocation().pathname;
    const splitLocation = location.split("/");
    const searchText = decodeURI(splitLocation[splitLocation.length - 1]);
    const repliesContain = (p) => {
        if (p.replies) {
            return p.replies.some((r) =>
                r.content.toLowerCase().includes(searchText)
            );
        }
    };
    const results = posts.filter((p) => {
        return (
            p.title.toLowerCase().includes(searchText) ||
            p.content.toLowerCase().includes(searchText) ||
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
                                >
                                    <Link to={"/"}>Retry</Link>
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
