import { Input, InputGroup, useColorModeValue } from "@chakra-ui/react";
import { useNavigate } from "react-router";
const CreatePost = () => {
    const bgColor = useColorModeValue("white", "gray.800");
    const nav = useNavigate();
    const handleClick = () => {
        nav("/submit");
    };
    return (
        <InputGroup
            width={"full"}
            rounded={"xl"}
            bg={bgColor}
            onClick={() => {
                console.log("clicked");
                handleClick();
            }}
        >
            <Input type="tel" placeholder="Create a new post" />
        </InputGroup>
    );
};

export default CreatePost;
