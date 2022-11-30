import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findPostsThunk } from "../services/posts-thunks";
import PostItem from "./post-item";

const PostStream = ({ chronological = true }) => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findPostsThunk(true));
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
                        {posts.map((post, index) => (
                            <Link to={`/post/${post._id}`} key={index}>
                                <PostItem
                                    post={post}
                                    currentUser={currentUser}
                                    index={index}
                                />
                            </Link>
                        ))}
                    </SimpleGrid>
                </Flex>
            )}
        </>
    );
};

export default PostStream;
