import { Flex, SimpleGrid, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PostBorder from "./post-border";
import PostItem from "./post-item";
import SearchBar from "./search-bar";
import posts from "../dummyData/posts.json";

const PostStream = ({ homePage = false }) => {
    return (
        <Flex
            textAlign={"center"}
            justifyContent={"center"}
            direction={"column"}
        >
            <SimpleGrid columns={{ base: 1 }} spacing={"10"}>
                {!homePage && (
                    <PostBorder
                        children={
                            <Tabs variant="soft-rounded" colorScheme={"purple"}>
                                <TabList>
                                    <Tab>All Posts</Tab>
                                    <Tab>My Posts</Tab>
                                    <Tab>Liked Posts</Tab>
                                </TabList>
                            </Tabs>
                        }
                    />
                )}
                {homePage && (
                    <Stack spacing={5}>
                        <SearchBar />
                        <PostBorder
                            children={
                                <Tabs
                                    variant="soft-rounded"
                                    colorScheme={"purple"}
                                >
                                    <TabList>
                                        <Tab>Featured</Tab>
                                        <Tab>New</Tab>
                                        <Tab>Popular</Tab>
                                    </TabList>
                                </Tabs>
                            }
                        />
                    </Stack>
                )}
                {posts.map((cardInfo, index) => (
                    <Link to={`/post/${cardInfo._id}`} key={index}>
                        <PostItem {...cardInfo} index={index} />
                    </Link>
                ))}
            </SimpleGrid>
        </Flex>
    );
};

export default PostStream;
