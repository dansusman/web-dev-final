import { SmallCloseIcon } from "@chakra-ui/icons";
import {
    Avatar,
    AvatarBadge,
    Button,
    Center,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    IconButton,
    Input,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

const ProfileCard = () => {
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
                my={12}
                display={{ base: "none", lg: "block" }}
                mt="0"
            >
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                    User Profile Edit
                </Heading>
                <FormControl id="userName">
                    <FormLabel>User Icon</FormLabel>
                    <Stack direction={["column", "row"]} spacing={6}>
                        <Center>
                            <Avatar size="xl" src="https://bit.ly/sage-adebayo">
                                <AvatarBadge
                                    as={IconButton}
                                    size="sm"
                                    rounded="full"
                                    top="-10px"
                                    colorScheme="red"
                                    aria-label="remove Image"
                                    icon={<SmallCloseIcon />}
                                />
                            </Avatar>
                        </Center>
                        <Center>
                            <Button>Change</Button>
                        </Center>
                    </Stack>
                </FormControl>
                <FormControl id="userName" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input
                        placeholder="weatherman3"
                        _placeholder={{ color: "gray.500" }}
                        type="text"
                    />
                </FormControl>
                <FormControl id="email" isRequired>
                    <FormLabel>Email address</FormLabel>
                    <Input
                        placeholder="your-email@example.com"
                        _placeholder={{ color: "gray.500" }}
                        type="email"
                    />
                </FormControl>
                <FormControl id="password" isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input
                        placeholder="password"
                        _placeholder={{ color: "gray.500" }}
                        type="password"
                    />
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
                    >
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
};

export default ProfileCard;
