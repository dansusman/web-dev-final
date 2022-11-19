import {
    Avatar,
    Flex,
    Heading,
    HStack,
    SimpleGrid,
    Stack,
    Tab,
    TabList,
    Tabs,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findPostsThunk } from "../services/posts-thunks";
import CreatePost from "./create-post";
import PostBorder from "./post-border";
import PostItem from "./post-item";

const PostStream = ({ homePage = false }) => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk());
    }, [dispatch]);
    return (
        <>
            {loading && <Heading>Loading ...</Heading>}
            {!loading && (
                <Flex
                    textAlign={"center"}
                    justifyContent={"center"}
                    direction={"column"}
                >
                    <SimpleGrid columns={{ base: 1 }} spacing={"10"}>
                        {!homePage && (
                            <PostBorder
                                children={
                                    <Tabs
                                        variant="soft-rounded"
                                        colorScheme={"purple"}
                                    >
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
                                <HStack spacing={5}>
                                    <Avatar />
                                    <CreatePost />
                                </HStack>
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
                        {posts.map((post, index) => (
                            <Link to={`/post/${post._id}`} key={index}>
                                <PostItem post={post} index={index} />
                            </Link>
                        ))}
                    </SimpleGrid>
                </Flex>
            )}
        </>
    );
};

export default PostStream;
