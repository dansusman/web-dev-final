import { ChatIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useDispatch } from "react-redux";
import { updatePostThunk } from "../services/posts-thunks";

const Interactions = ({ post }) => {
    const dispatch = useDispatch();
    return (
        <Stack spacing={"14"} direction={["column", "row"]}>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                }}
                variant="ghost"
                leftIcon={<ChatIcon />}
            >
                {post.replies}
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
