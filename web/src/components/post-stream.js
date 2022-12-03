import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findPostsByAuthorThunk, findPostsThunk } from "../posts/posts-thunks";
import PostItem from "./post-item";

const PostStream = ({ chronological = true, forUser = null }) => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const dispatch = useDispatch();
    useEffect(() => {
        if (forUser) {
            dispatch(findPostsByAuthorThunk(forUser));
        } else {
            dispatch(findPostsThunk(chronological));
        }
    }, [dispatch, forUser]);
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
