import { CloseButton, HStack, Spacer, Text } from "@chakra-ui/react";
import ReplyBorder from "./reply-border";

const UserItem = ({ user }) => {
    return (
        <ReplyBorder
            height={"90px"}
            children={
                <>
                    <Text pe={{ base: "5", lg: "20" }}>{user.username}</Text>
                    <CloseButton
                        position="absolute"
                        right={"2"}
                        top={"2"}
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                        backgroundColor={"transparent"}
                        _hover={{
                            bg: "transparent",
                        }}
                    />
                </>
            }
        ></ReplyBorder>
    );
};

export default UserItem;
