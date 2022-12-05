import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    findPostsByAuthorThunk,
    findPostsLikedByUserThunk,
    findPostsThunk,
} from "../posts/posts-thunks";
import PostItem from "./post-item";

const PostStream = ({
    chronological = true,
    forUser = null,
    liked = false,
}) => {
    const { posts, loading } = useSelector((state) => state.postsData);
    const { likers } = useSelector((state) => state.likes);
    const dispatch = useDispatch();
    useEffect(() => {
        if (forUser) {
            if (!liked) {
                dispatch(findPostsByAuthorThunk(forUser));
            } else {
                dispatch(findPostsLikedByUserThunk(forUser));
            }
        } else {
            dispatch(findPostsThunk(chronological));
        }
    }, [dispatch, forUser]);

    var postsSort = [...posts];
    if (!chronological) {
        postsSort.sort((a, b) => {
            return (
                likers[a._id] &&
                likers[b._id] &&
                likers[a._id].length < likers[b._id].length
            );
        });
    }

    var actualPosts = postsSort;

    if (liked) {
        actualPosts = posts?.map((p) => {
            if (p.post) {
                return p.post;
            }
            return p;
        });
    }

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
                        {actualPosts.map((post, index) => (
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
