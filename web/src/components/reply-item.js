import {
  Avatar,
  chakra,
  CloseButton,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updatePostThunk } from "../services/posts-thunks";
import ReplyBorder from "./reply-border";

const ReplyItem = ({ reply, post }) => {
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
  return (
    <ReplyBorder>
      <HStack>
        <Stack pe={3} spacing={0} align="center">
          <Avatar src={reply.image} height={"50px"} width={"50px"} />
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
      <IconButton
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
        icon={<CloseButton />}
      />
    </ReplyBorder>
  );
};

export default ReplyItem;
