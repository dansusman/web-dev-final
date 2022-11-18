import {
    CloseButton,
    Flex,
    IconButton,
    useColorModeValue,
} from "@chakra-ui/react";

const PostBorder = ({ children }, { background }) => {
    return (
        <Flex
            boxShadow={"lg"}
            maxW={"10040px"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            rounded={"xl"}
            p={10}
            justifyContent={"space-between"}
            position={"relative"}
            bg={useColorModeValue("white", "gray.800")}
            _before={{
                content: '""',
                position: "absolute",
                zIndex: "-1",
                height: "full",
                maxW: "640px",
                width: "full",
                filter: "blur(40px)",
                transform: "scale(0.98)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                top: 0,
                left: 0,
                ...background,
            }}
        >
            {children}
        </Flex>
    );
};

export default PostBorder;
