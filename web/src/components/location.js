import { Flex, Heading, Stack, useColorModeValue } from "@chakra-ui/react";

const Location = ({ location }) => {
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
            >
                <Heading size={"md"}>Location Settings</Heading>
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", sm: "3xl" }}>
                    {location?.name}
                </Heading>
                <Heading lineHeight={1.1} fontSize={{ base: "xl", sm: "2xl" }}>
                    {location?.main.temp}
                </Heading>
                <Heading lineHeight={1.1} fontSize={{ base: "xl", sm: "2xl" }}>
                    {location?.weather[0].main}
                </Heading>
            </Stack>
        </Flex>
    );
};

export default Location;
