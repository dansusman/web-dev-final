import {
  Avatar,
  Button,
  chakra,
  CloseButton,
  Flex,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch } from "react-redux";
import { deletePostThunk } from "../services/posts-thunks";
import ReplyBorder from "./reply-border";

const ReplyItem = ({ reply }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deletePostThunk(id));
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
