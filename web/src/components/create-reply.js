import {
    Button,
    Flex,
    FormControl,
    Spacer,
    Stack,
    Textarea,
    useColorModeValue,
    useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { updatePostThunk } from "../posts/posts-thunks";
const CreateReply = ({ post }) => {
    const { currentUser } = useSelector((state) => state.users);
    const bgColor = useColorModeValue("white", "gray.800");
    const toast = useToast();
    const nav = useNavigate();
    const [text, setText] = useState("");
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const contentHandler = (e) => {
        const lowerCase = e.target.value;
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
                    disabled={showError}
                    onClick={() => {
                        if (!currentUser) {
                            setShowError(true);
                            toast({
                                title: "Error",
                                description: "Please log in to post a reply!",
                                status: "error",
                                duration: 3000,
                                isClosable: true,
                            });
                            nav("/login");
                            return;
                        }
                        const newPost = {
                            content: text,
                            username: currentUser.username,
                            author: currentUser._id,
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
