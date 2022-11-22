import {
  Button,
  Flex,
  FormControl,
  Spacer,
  Stack,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updatePostThunk } from "../services/posts-thunks";
const CreateReply = ({ post }) => {
  const bgColor = useColorModeValue("white", "gray.800");
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const contentHandler = (e) => {
    const lowerCase = e.target.value.toLowerCase();
    setText(lowerCase);
  };
  return (
    <Stack spacing={2}>
      <FormControl id="body-text" mt={1}>
        <Textarea
          placeholder="What are your thoughts?"
          rows={3}
          shadow="sm"
          focusBorderColor="brand.400"
          fontSize={{
            sm: "sm",
          }}
          onChange={contentHandler}
          value={text}
          bg={bgColor}
        />
      </FormControl>
      <Flex>
        <Spacer />
        <Button
          w={"fit-content"}
          bg={"blue.400"}
          color={"white"}
          _hover={{
            bg: "blue.500",
          }}
          onClick={() => {
            const newPost = {
              content: text,
              username: "Dylan",
              _id: new Date().getTime() + "",
            };
            const newPosts = (post.replies || []).concat(newPost);
            dispatch(
              updatePostThunk({
                ...post,
                repliesCount: post.repliesCount + 1,
                replies: newPosts,
              })
            );
            setText("");
          }}
        >
          Submit
        </Button>
      </Flex>
    </Stack>
  );
};

export default CreateReply;
