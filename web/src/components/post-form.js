import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    FormControl,
    FormHelperText,
    Heading,
    Input,
    SimpleGrid,
    Spacer,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { useToast } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { createPostThunk } from "../services/posts-thunks";

export default function PostForm() {
    const nav = useNavigate();
    const [text, setText] = useState();
    const [title, setTitle] = useState();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const newPost = {
            title: title,
            content: text,
            time: new Date(),
            username: "Bob",
        };
        dispatch(createPostThunk(newPost));
        nav("/");
    };
    const titleHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setTitle(lowerCase);
    };
    const contentHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setText(lowerCase);
    };
    const toast = useToast();
    return (
        <>
            <Box
                boxShadow={"lg"}
                maxW={"10040px"}
                direction={{ base: "column-reverse", md: "row" }}
                width={"full"}
                p={10}
                justifyContent={"space-between"}
                position={"relative"}
                bg={useColorModeValue("white", "gray.800")}
                borderWidth="1px"
                rounded="lg"
                maxWidth={800}
                m="10px auto"
                as="form"
            >
                <SimpleGrid columns={1} spacing={6}>
                    <Heading w="100%" textAlign={"center"} fontWeight="normal">
                        Create a post
                    </Heading>
                    <Input
                        placeholder="Title"
                        focusBorderColor="brand.400"
                        rounded="md"
                        onChange={titleHandler}
                    />

                    <FormControl id="body-text" mt={1}>
                        <Textarea
                            placeholder="Text (optional)"
                            rows={3}
                            shadow="sm"
                            focusBorderColor="brand.400"
                            fontSize={{
                                sm: "sm",
                            }}
                            onChange={contentHandler}
                        />
                        <FormHelperText>
                            Talk about the weather! Share your thoughts with the
                            world!
                        </FormHelperText>
                    </FormControl>
                </SimpleGrid>
                <ButtonGroup mt="5%" w="100%">
                    <Flex w="100%" justifyContent="space-between">
                        <Spacer />
                        <Button
                            w="7rem"
                            colorScheme="red"
                            variant="solid"
                            onClick={() => {
                                toast({
                                    title: "Posted.",
                                    description: "Thanks for sharing!",
                                    status: "success",
                                    duration: 3000,
                                    isClosable: true,
                                });
                                handleSubmit(title, text);
                            }}
                        >
                            Submit
                        </Button>
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
}
