import { Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserItem from "./user-item";

const UserStream = () => {
    const { users, loading } = useSelector((state) => state.users);
    return (
        <>
            {loading && <Heading>Loading ...</Heading>}
            {!loading && (
                <Flex
                    textAlign={"center"}
                    justifyContent={"center"}
                    direction={"column"}
                >
                    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={"10"}>
                        {users.map((u, index) => {
                            if (u.type !== "Moderator") {
                                return (
                                    <Link to={`/profile/${u._id}`} key={index}>
                                        <UserItem user={u} />
                                    </Link>
                                );
                            }
                            return null;
                        })}
                    </SimpleGrid>
                </Flex>
            )}
        </>
    );
};

export default UserStream;
