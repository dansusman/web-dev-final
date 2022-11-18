import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Avatar, Box, Button, Center, Flex, HStack, Link, Menu,
    MenuButton, MenuDivider, MenuItem, MenuList, Stack, Text, useColorMode, useColorModeValue, VStack
} from "@chakra-ui/react";
import React from "react";

export default function NavTopBar() {
    const { colorMode, toggleColorMode } = useColorMode();
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
                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={5}>
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
                                        <Avatar
                                            size={"sm"}
                                            src={
                                                "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                                            }
                                        />
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
                                                Justina Clark
                                            </Text>
                                            <Text
                                                fontSize="xs"
                                                color="gray.600"
                                            >
                                                Admin
                                            </Text>
                                        </VStack>
                                    </HStack>
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"lg"}
                                            src={
                                                "https://avatars.dicebear.com/api/male/username.svg"
                                            }
                                        />
                                    </Center>
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <Center>
                                        <p>Admin</p>
                                    </Center>
                                    <MenuDivider mb="0" />
                                    <MenuItem as={Link} href="/profile">
                                        View Profile
                                    </MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    );
}
