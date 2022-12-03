import { SmallCloseIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
    Avatar,
    AvatarBadge,
    Button,
    Center,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputRightElement,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../users/users-thunks";

const ProfileCard = ({ user }) => {
    const dispatch = useDispatch();
    const [usernameText, setUsernameText] = useState();
    const [passwordText, setPasswordText] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordError, setShowPasswordError] = useState(false);
    const usernameHandler = (e) => {
        const username = e.target.value;
        setUsernameText(username);
    };
    const handlePassword = (e) => {
        const password = e.target.value;
        setPasswordText(password);
    };
    const clickHandler = () => {
        const changes = {
            ...user,
            username: usernameText,
            password: passwordText,
        };
        dispatch(updateUserThunk(changes));
    };
    return (
        <Flex align={"center"} justify={"center"}>
            <Stack
                spacing={4}
                w={"full"}
                maxW={"md"}
                bg={useColorModeValue("white", "gray.700")}
                rounded={"xl"}
                boxShadow={"lg"}
                p={6}
                display={{ base: "none", lg: "block" }}
                mt="0"
            >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                    User Profile Edit
                </Heading>
                <FormControl id="userName" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        onChange={usernameHandler}
                        type="text"
                        defaultValue={user?.username}
                    />
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
                            defaultValue={user?.password}
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
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    <FormErrorMessage>
                        Please enter a password longer than 8 characters.
                    </FormErrorMessage>
                </FormControl>
                <Stack spacing={6} direction={["column", "row"]}>
                    <Button
                        bg={"red.400"}
                        color={"white"}
                        w="full"
                        _hover={{
                            bg: "red.500",
                        }}
                    >
                        Cancel
                    </Button>
                    <Button
                        bg={"blue.400"}
                        color={"white"}
                        w="full"
                        _hover={{
                            bg: "blue.500",
                        }}
                        onClick={clickHandler}
                    >
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
};

export default ProfileCard;
