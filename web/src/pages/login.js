import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { loginThunk, profileThunk } from "../users/users-thunks";

const LoginCard = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showError, setError] = useState(null);
    const { currentUser } = useSelector((state) => state.users);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const handleSubmit = () => {
        setError(null);
        const loginUser = { username, password };
        dispatch(loginThunk(loginUser));
        if (!currentUser) {
            setError(true);
            return;
        }
        nav("/");
    };
    const handleUsername = (e) => setUsername(e.target.value);
    const handlePassword = (e) => {
        setPassword(e.target.value);
    };
    useEffect(() => {
        dispatch(profileThunk());
        if (currentUser) {
            nav("/");
        }
    }, [dispatch, currentUser, nav]);
    return (
        <Flex minH={"100vh"} align={"center"} justify={"center"}>
            <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
                <Stack align={"center"}>
                    <Heading fontSize={"4xl"}>Sign in to your account</Heading>
                </Stack>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <Stack spacing={4}>
                        <FormControl id="username" isInvalid={showError}>
                            <FormLabel>Username</FormLabel>
                            <Input type="text" onChange={handleUsername} />
                        </FormControl>
                        <FormControl id="password" isInvalid={showError}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                type="password"
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        handleSubmit();
                                        return;
                                    }
                                }}
                                onChange={handlePassword}
                            />
                            {showError && (
                                <FormErrorMessage>
                                    Issue with login information. Please check
                                    again!
                                </FormErrorMessage>
                            )}
                        </FormControl>{" "}
                        <Button
                            bg={"blue.400"}
                            color={"white"}
                            _hover={{
                                bg: "blue.500",
                            }}
                            onClick={handleSubmit}
                        >
                            Sign in
                        </Button>
                        <Stack pt={5}>
                            <Text align={"center"}>
                                No account?{" "}
                                <Link href="/register" color={"blue.400"}>
                                    Sign up!
                                </Link>
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default LoginCard;
