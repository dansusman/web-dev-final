import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Stack,
    Text,
    useColorModeValue,
    FormErrorMessage,
    Switch,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../services/users-service";
import {
    findUserByUsernameThunk,
    registerThunk,
} from "../services/users-thunks";
import { useNavigate } from "react-router";

const SignupCard = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const [showError, setShowError] = useState(false);
    const dispatch = useDispatch();
    const { existing } = useSelector((state) => state.users);
    const nav = useNavigate();

    const taken = () => {
        dispatch(findUserByUsernameThunk(username));
        return existing;
    };

    const passwordValid = () => {
        return password.length >= 8;
    };

    useEffect(() => {
        dispatch(findUserByUsernameThunk(username));
    });

    const handleSubmit = () => {
        setShowError(false);
        setShowPasswordError(false);
        if (!passwordValid()) {
            setShowPasswordError(true);
            return;
        }
        if (taken()) {
            setShowError(true);
            return;
        }
        dispatch(
            registerThunk({
                username: username,
                password: password,
                type: "User",
            })
        );
        nav("/login");
    };
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    return (
        <Flex
            minH={"100vh"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
        >
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"} textAlign={"center"}>
                        Sign up for SmallTalk
                    </Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl
                            id="username"
                            isRequired
                            isInvalid={showError}
                            onChange={handleUsername}
                        >
                            <FormLabel>Username</FormLabel>
                            <Input type="text" name="username" />
                            <FormErrorMessage>
                                Invalid name! Please enter another username.
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl
                            id="isModerator"
                            // isInvalid={showError}
                            // onChange={handleUsername}
                        >
                            <FormLabel>Want Mod?</FormLabel>
                            <Switch />
                            {/* <Input type="text" name="username" /> */}
                            <FormErrorMessage>
                                Invalid name! Please enter another username.
                            </FormErrorMessage>
                        </FormControl>
                        <FormControl
                            id="password"
                            isRequired
                            isInvalid={showPasswordError}
                            onChange={handlePassword}
                        >
                            <FormLabel>Password</FormLabel>
                            <InputGroup>
                                <Input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                />
                                <InputRightElement h={"full"}>
                                    <Button
                                        variant={"ghost"}
                                        onClick={() =>
                                            setShowPassword(
                                                (showPassword) => !showPassword
                                            )
                                        }
                                    >
                                        {showPassword ? (
                                            <ViewIcon />
                                        ) : (
                                            <ViewOffIcon />
                                        )}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <FormErrorMessage>
                                Please enter a password longer than 8
                                characters.
                            </FormErrorMessage>
                        </FormControl>
                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={"blue.400"}
                                color={"white"}
                                _hover={{
                                    bg: "blue.500",
                                }}
                                type="submit"
                                onClick={handleSubmit}
                            >
                                Sign up
                            </Button>
                        </Stack>
                        <Stack pt={6}>
                            <Text align={"center"}>
                                Already a user?{" "}
                                <Link href="/login" color={"blue.400"}>
                                    Login
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default SignupCard;
