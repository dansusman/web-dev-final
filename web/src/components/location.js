import {
    Button,
    Flex,
    Heading,
    HStack,
    Input,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";

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
                <HStack align="center">
                    <Heading fontSize={"xl"}>{location?.name}</Heading>
                    <Heading fontSize={"xl"}>{location?.main.temp}</Heading>
                    <Heading fontSize={"xl"}>
                        {location?.weather[0].main}
                    </Heading>
                </HStack>
                <HStack>
                    <Input></Input>
                    <Button>Change</Button>
                </HStack>
            </Stack>
        </Flex>
    );
};

export default Location;
