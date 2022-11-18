import { Button, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";

import { Link } from "react-router-dom";
import PostItem from "../components/post-item";
import React from "react";
import SearchBar from "../components/search-bar";
import posts from "../dummyData/posts.json";
import { useLocation } from "react-router";
import BasicPage from "../components/basic-page";

const Search = () => {
    const location = useLocation().pathname;
    const splitLocation = location.split("/");
    const searchText = decodeURI(splitLocation[splitLocation.length - 1]);
    const results = posts.filter((p) => {
        return (
            p.title.toLowerCase().includes(searchText) ||
            p.content.toLowerCase().includes(searchText)
        );
    });
    console.log(results);
    return (
        <BasicPage
            children={
                <>
                    {results.length > 0 && (
                        <Stack spacing={5}>
                            <SearchBar />
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
                                            <PostItem {...post} index={index} />
                                        </Link>
                                    ))}
                                </SimpleGrid>
                            </Flex>
                        </Stack>
                    )}
                    {results.length === 0 && (
                        <Stack spacing={5}>
                            <SearchBar content={searchText} />
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
