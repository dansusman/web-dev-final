import { CloseButton, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteUserThunk } from "../users/users-thunks";
import ReplyBorder from "./reply-border";

const UserItem = ({ user }) => {
    const dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        if (user) {
            dispatch(deleteUserThunk(user._id));
        }
    };
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
                        onClick={handleClick}
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
