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
import NightsStayIcon from "@mui/icons-material/NightsStay";
import { useDispatch } from "react-redux";
import { findWeatherThunk } from "../services/location-thunks";
import { deletePostThunk } from "../services/posts-thunks";
import Interactions from "./interactions";
import PostBorder from "./post-border";

const PostItem = ({ post }) => {
  const dispatch = useDispatch();
  const deleteHandler = (id) => {
    dispatch(deletePostThunk(id));
  };
  const dateStamp = post.time;
  let splitUp = [];
  let timePretty = "";
  if (dateStamp != null) {
    splitUp = dateStamp.split("T");
    splitUp = splitUp[0].split("-");
    timePretty = splitUp[1] + "/" + splitUp[2] + "/" + splitUp[0];
  }
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
        <chakra.p
          fontWeight={"medium"}
          fontSize={"15px"}
          pt={4}
          pb={4}
        >
          {post.content}
        </chakra.p>
        <Interactions post={post} />
      </Flex>
      <Stack ms="5" me="5" spacing={0} align="center" minW="100px">
        <Avatar src={post.image} height={"80px"} width={"80px"} />
        <chakra.p fontWeight={"bold"} fontSize={14}>
          {post.name}
        </chakra.p>
        <chakra.p fontWeight={"medium"} color={"gray.500"}>
          @{post.username}
        </chakra.p>
        <Button
          // flex="1"
          p="2"
          variant="ghost"
          leftIcon={<NightsStayIcon />}
          onClick={(e) => {
            e.preventDefault();
            dispatch(findWeatherThunk("London"));
          }}
        >
          Weather
        </Button>
      </Stack>
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
    </PostBorder>
  );
};

export default PostItem;
