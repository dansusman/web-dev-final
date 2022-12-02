import {
    Box,
    Button,
    ButtonGroup,
    Flex,
    FormControl,
    FormErrorMessage,
    FormHelperText,
    FormLabel,
    Heading,
    Input,
    Select,
    SimpleGrid,
    Spacer,
    Textarea,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { createPostThunk } from "../posts/posts-thunks";
import cities from "../locations/locations";
import { findWeatherThunk } from "../locations/location-thunks";

const PostForm = ({ locationDefault }) => {
    const nav = useNavigate();
    const [text, setText] = useState();
    const [title, setTitle] = useState();
    const [location, setLocation] = useState(locationDefault);
    const [showTitleError, setShowTitleError] = useState(false);
    const [showLocationError, setShowLocationError] = useState(false);
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const { locations } = useSelector((state) => state.locationsData);
    useEffect(() => {
        dispatch(findWeatherThunk(location));
    }, [location]);
    const handleSubmit = () => {
        const newPost = {
            title: title,
            content: text,
            time: new Date(),
            username: currentUser.username,
            location: location,
            temperature: locations[0]?.main.temp,
            conditions: locations[0]?.weather[0].main,
            weatherIconCode: locations[0]?.weather[0].icon,
        };
        dispatch(createPostThunk(newPost));
        nav("/");
    };
    const titleHandler = (e) => {
        setShowTitleError(false);
        const lowerCase = e.target.value;
        setTitle(lowerCase);
    };
    const contentHandler = (e) => {
        const lowerCase = e.target.value;
        setText(lowerCase);
    };
    const locationHandler = (e) => {
        setShowLocationError(false);
        const lowerCase = e.target.value;
        setLocation(lowerCase);
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
                    <FormControl
                        id="title"
                        isRequired
                        isInvalid={showTitleError}
                    >
                        <FormLabel>Title</FormLabel>
                        <Input
                            placeholder="Title"
                            focusBorderColor="brand.400"
                            rounded="md"
                            onChange={titleHandler}
                        />
                        {showTitleError && (
                            <FormErrorMessage>
                                Title is required.
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl id="body-text" mt={1}>
                        <FormLabel>Body</FormLabel>
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
                    <FormControl
                        id="location"
                        isRequired
                        isInvalid={showLocationError}
                    >
                        <FormLabel>City</FormLabel>
                        <Select
                            onChange={locationHandler}
                            placeholder="Select Your Location"
                            value={location}
                        >
                            {cities.map((l, index) => (
                                <option key={index}>{l}</option>
                            ))}
                        </Select>
                        {showLocationError && (
                            <FormErrorMessage>
                                City is required.
                            </FormErrorMessage>
                        )}
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
                                if (title === undefined || title === "") {
                                    setShowTitleError(true);
                                }
                                if (location === "") {
                                    setShowLocationError(true);
                                }
                                if (
                                    title === undefined ||
                                    title === "" ||
                                    location === ""
                                ) {
                                    return;
                                } else {
                                    handleSubmit();
                                    toast({
                                        title: "Posted.",
                                        description: "Thanks for sharing!",
                                        status: "success",
                                        duration: 3000,
                                        isClosable: true,
                                    });
                                }
                            }}
                        >
                            Submit
                        </Button>
                    </Flex>
                </ButtonGroup>
            </Box>
        </>
    );
};

export default PostForm;
