import { Flex, useColorModeValue } from "@chakra-ui/react";

const ReplyBorder = ({ children, background, height }) => {
    return (
        <Flex
            boxShadow={"lg"}
            maxW={"10040px"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            height={height ? height : "140px"}
            rounded={"xl"}
            p={6}
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

export default ReplyBorder;
