import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Avatar,
    Box,
    Button,
    Center,
    chakra,
    Flex,
    HStack,
    Link,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItem,
    MenuList,
    Stack,
    Text,
    useColorMode,
    useColorModeValue,
    VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { logoutThunk } from "../users/users-thunks";
import SearchBar from "./search-bar";

const NavTopBar = ({ user }) => {
    const { colorMode, toggleColorMode } = useColorMode();
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { currentUser } = useSelector((state) => state.users);
    return (
        <>
            <Box px="4" mb="5">
                <Flex
                    h={16}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                >
                    <Link
                        textDecoration={"none"}
                        href="/"
                        fontSize="2xl"
                        fontWeight="bold"
                        color={useColorModeValue("purple.500", "purple.300")}
                    >
                        smallTalk
                    </Link>
                    <SearchBar />
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? (
                                    <MoonIcon />
                                ) : (
                                    <SunIcon />
                                )}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <HStack>
                                        <Avatar size={"sm"} />
                                        <VStack
                                            display={{
                                                base: "none",
                                                md: "flex",
                                            }}
                                            alignItems="flex-start"
                                            spacing="1px"
                                            ml="2"
                                        >
                                            <Text fontSize="sm">
                                                {user?.username}
                                            </Text>
                                            {user?.type === "Moderator" && (
                                                <Text
                                                    fontSize="xs"
                                                    color="gray.600"
                                                >
                                                    {user?.type}
                                                </Text>
                                            )}
                                        </VStack>
                                    </HStack>
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar size={"lg"} />
                                    </Center>
                                    <Center>
                                        <chakra.p color={"gray.500"}>
                                            @{user?.username}
                                        </chakra.p>
                                    </Center>
                                    <Center>
                                        {user?.type === "Moderator" && (
                                            <chakra.p color={"gray.500"}>
                                                {user?.type}
                                            </chakra.p>
                                        )}
                                    </Center>
                                    <MenuDivider mb="0" />
                                    <MenuItem onClick={() => nav("/profile")}>
                                        View Profile
                                    </MenuItem>
                                    {currentUser &&
                                        currentUser?.type === "Moderator" && (
                                            <MenuItem
                                                onClick={() => nav("/users")}
                                            >
                                                View Users
                                            </MenuItem>
                                        )}
                                    {!currentUser && (
                                        <MenuItem
                                            onClick={() => {
                                                nav("/login");
                                            }}
                                        >
                                            Login
                                        </MenuItem>
                                    )}
                                    {currentUser && (
                                        <MenuItem
                                            onClick={() => {
                                                dispatch(logoutThunk());
                                            }}
                                        >
                                            Logout
                                        </MenuItem>
                                    )}
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
};

export default NavTopBar;
