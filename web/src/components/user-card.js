import {
    Avatar,
    Box,
    Button,
    Flex,
    Heading,
    HStack,
    Spacer,
    Stack,
    Text,
    useColorModeValue,
} from "@chakra-ui/react";
import { UsersListModal } from "./users-list-modal";
const UserCard = ({ user }) => {
    return (
        <Flex justify={"center"}>
            <Stack spacing={8} minW={350} mx={"auto"} maxW={"lg"}>
                <Box
                    rounded={"lg"}
                    bg={useColorModeValue("white", "gray.700")}
                    boxShadow={"lg"}
                    p={8}
                >
                    <HStack spacing={10}>
                        <Avatar size={"lg"} src={user.image}></Avatar>
                        <Stack spacing="5">
                            <HStack>
                                <Heading size="md" as="h2">
                                    {user.username}
                                </Heading>
                                <Spacer />
                                <Button variant="solid" colorScheme="purple">
                                    Follow
                                </Button>
                            </HStack>
                            <HStack spacing="10">
                                <UsersListModal
                                    followed={false}
                                    text={
                                        <HStack>
                                            <Text as="b">
                                                {user.followerCount}
                                            </Text>
                                            <Text>followers</Text>
                                        </HStack>
                                    }
                                    users={user.followers}
                                ></UsersListModal>
                                <UsersListModal
                                    followed={true}
                                    text={
                                        <HStack>
                                            <Text as="b">
                                                {user.followingCount}
                                            </Text>
                                            <Text>following</Text>
                                        </HStack>
                                    }
                                    users={user.following}
                                ></UsersListModal>
                            </HStack>
                            {user.location && <Text>📍 {user.location}</Text>}
                        </Stack>
                    </HStack>
                </Box>
            </Stack>
        </Flex>
    );
};

export default UserCard;
