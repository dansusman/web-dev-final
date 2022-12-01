import { Input, InputGroup, useColorModeValue } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
const CreatePost = () => {
    const bgColor = useColorModeValue("white", "gray.800");
    const nav = useNavigate();
    const { currentUser } = useSelector((state) => state.users);
    const handleClick = () => {
        if (currentUser) {
            nav("/submit");
            return;
        } else {
            nav("/login");
            return;
        }
    };
    return (
        <InputGroup
            width={"full"}
            rounded={"xl"}
            bg={bgColor}
            onClick={() => {
                handleClick();
            }}
        >
            <Input type="tel" placeholder="Create a new post" />
        </InputGroup>
    );
};

export default CreatePost;
