import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Radio,
    RadioGroup,
    Stack,
    Switch,
    useColorModeValue
} from "@chakra-ui/react";

const UserSettings = () => {
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
                <Heading size={"md"}>General Settings</Heading>
                <FormControl alignItems="center">
                    <FormLabel htmlFor="celsius" mb="0">
                        Temperature Units
                    </FormLabel>
                    <RadioGroup defaultValue={"F"}>
                        <HStack spacing="10">
                            <Radio value="F">Fahrenheit</Radio>
                            <Radio value="C">Celsius</Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="24-hr-time" mb="0">
                        Enable 24 hour time?
                    </FormLabel>
                    <Switch id="24-hr-time" />
                </FormControl>
                <Button
                    bg={"red.400"}
                    color={"white"}
                    w="full"
                    _hover={{
                        bg: "red.500",
                    }}
                >
                    Reset
                </Button>
            </Stack>
        </Flex>
    );
};

export default UserSettings;
