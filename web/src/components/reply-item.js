import {
    Avatar,
    chakra,
    CloseButton,
    HStack,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updatePostThunk } from "../posts/posts-thunks";
import ReplyBorder from "./reply-border";

const ReplyItem = ({ reply, post }) => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const deleteHandler = (id) => {
        const withoutId = post.replies.filter(
            (p) => parseInt(p._id) !== parseInt(id)
        );
        dispatch(
            updatePostThunk({
                ...post,
                replies: withoutId,
                repliesCount: post.repliesCount - 1,
            })
        );
    };
    const nav = useNavigate();
    const imageGenerator = () => {
        const username = reply.username;
        const url = `https://ui-avatars.com/api/?background=random&name=${username}`;
        return url;
    };
    return (
        <ReplyBorder>
            <HStack>
                <Stack
                    pe={3}
                    spacing={0}
                    align="center"
                    onClick={(e) => {
                        e.preventDefault();
                        nav(`/profile/${post.author}`);
                    }}
                >
                    <Avatar
                        src={imageGenerator()}
                        height={"50px"}
                        width={"50px"}
                    />
                    <chakra.p fontWeight={"bold"} fontSize={14}>
                        {reply.name}
                    </chakra.p>
                    <chakra.p fontWeight={"medium"} color={"gray.500"}>
                        @{reply.username}
                    </chakra.p>
                </Stack>
                <Text
                    pe={2}
                    maxW={"90%"}
                    noOfLines={4}
                    fontWeight={"medium"}
                    fontSize={"14px"}
                >
                    {reply.content}
                </Text>
            </HStack>
            {((currentUser && currentUser?._id === reply.author) ||
                currentUser?.type === "Moderator") && (
                <CloseButton
                    position="absolute"
                    right={"2"}
                    top={"2"}
                    onClick={(e) => {
                        e.preventDefault();
                        deleteHandler(reply._id);
                    }}
                    backgroundColor={"transparent"}
                    _hover={{
                        bg: "transparent",
                    }}
                />
            )}
        </ReplyBorder>
    );
};

export default ReplyItem;
