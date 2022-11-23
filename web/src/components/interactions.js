import { ChatIcon } from "@chakra-ui/icons";
import { Button, Spacer, Stack } from "@chakra-ui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NightsStay from "@mui/icons-material/NightsStay";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { updatePostThunk } from "../services/posts-thunks";

const Interactions = ({ post }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  return (
    <Stack spacing={"14"} direction={["column", "row"]}>
      {post.location && (
        <Button
          // flex="1"
          p="2"
          variant="ghost"
          leftIcon={<NightsStay />}
          onClick={(e) => {
            nav("/submit");
            e.preventDefault();
          }}
        >
          {post.location}
        </Button>
      )}
      <Button
        onClick={(e) => {
          nav(`/post/${post._id}`);
          e.preventDefault();
        }}
        variant="ghost"
        leftIcon={<ChatIcon />}
      >
        {post.repliesCount}
      </Button>
      <Button
        onClick={(e) => {
          dispatch(
            updatePostThunk({
              ...post,
              likes: post.liked
                ? post.likes - 1
                : (parseInt(post.likes) + 1).toString(),
              liked: !post.liked,
            })
          );
          e.preventDefault();
        }}
        variant="ghost"
        leftIcon={
          post.liked ? (
            <FavoriteIcon sx={{ color: "red" }} />
          ) : (
            <FavoriteBorderIcon />
          )
        }
      >
        {post.likes}
      </Button>
    </Stack>
  );
};

export default Interactions;
