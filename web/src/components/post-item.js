import {
    Avatar,
    Button,
    chakra,
    CloseButton,
    Flex,
    Heading,
    HStack,
    Stack,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { followUserThunk } from "../follows/follows-thunks";
import { deletePostThunk } from "../posts/posts-thunks";
import Interactions from "./interactions";
import PostBorder from "./post-border";

const PostItem = ({ post, following, forUser }) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { currentUser } = useSelector((state) => state.users);
    const dateStamp = post.time;
    var options = {
        hour12: !currentUser || !currentUser.twentyFour,
    };
    const timePretty = new Date(dateStamp).toLocaleString("en-US", options);
    const deleteHandler = (id) => {
        dispatch(deletePostThunk(id));
    };
    const imageGenerator = () => {
        const username = post.username;
        const url = `https://ui-avatars.com/api/?background=random&name=${username}`;
        return url;
    };

    const handleFollow = (e) => {
        e.preventDefault();
        if (!currentUser) {
            nav("/login");
            return;
        }
        if (post.author) {
            dispatch(followUserThunk({ followed: post.author }));
            return;
        }
    };

    // don't show the follow button if:
    // 1. Not logged in
    // 2. I am the post's author
    // 3. I am already following the post's author
    const notLoggedIn = !currentUser;
    const iFollow = following?.filter((u) => {
        const compareThis = forUser ? currentUser?._id : post.author;
        const toThat = forUser ? u.follower : u.followed;
        return compareThis === toThat._id;
    });
    const followingPoster = iFollow.length > 0;
    const iAmPoster = currentUser?._id === post.author;
    const showFollowButton = notLoggedIn || (!iAmPoster && !followingPoster);

    return (
        <PostBorder>
            <Flex
                direction={"column"}
                textAlign={"left"}
                justifyContent={"space-between"}
            >
                <HStack>
                    <Heading size="lg">{post.title}</Heading>
                    {timePretty !== "" && (
                        <chakra.p fontWeight={"medium"} color={"gray.500"}>
                            {timePretty}
                        </chakra.p>
                    )}
                </HStack>
                <chakra.p fontWeight={"medium"} fontSize={"15px"} pt={4} pb={4}>
                    {post.content}
                </chakra.p>
                <Interactions post={post} />
            </Flex>
            <Stack
                ms="5"
                me="5"
                spacing={0}
                align="center"
                minW="100px"
                onClick={(e) => e.preventDefault()}
            >
                <Stack align={"center"}>
                    <Stack
                        onClick={(e) => {
                            e.preventDefault();
                            nav(`/profile/${post.author}`);
                        }}
                        align="center"
                    >
                        <Avatar
                            src={imageGenerator()}
                            height={"80px"}
                            width={"80px"}
                        />
                        <chakra.p fontWeight={"medium"} color={"gray.500"}>
                            @{post.username}
                        </chakra.p>
                    </Stack>
                    {showFollowButton && (
                        <Button onClick={handleFollow}>Follow</Button>
                    )}
                </Stack>
            </Stack>
            {((currentUser && currentUser?._id === post.author) ||
                currentUser?.type === "Moderator") && (
                <CloseButton
                    position="absolute"
                    right={"4"}
                    top={"4"}
                    onClick={(e) => {
                        e.preventDefault();
                        deleteHandler(post._id);
                    }}
                    backgroundColor={"transparent"}
                    _hover={{
                        bg: "transparent",
                    }}
                />
            )}
        </PostBorder>
    );
};

export default PostItem;
