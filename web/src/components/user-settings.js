import {
    Flex,
    FormControl,
    FormLabel,
    Heading,
    HStack,
    Radio,
    RadioGroup,
    Stack,
    Switch,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserThunk } from "../services/users-thunks";

const UserSettings = ({ currentUser }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(currentUser?.twentyFour);
    const timeHandler = () => {
        const checkedBefore = checked;
        setChecked(!checked);
        const updates = {
            ...currentUser,
            twentyFour: !checkedBefore,
        };
        dispatch(updateUserThunk(updates));
    };

    useEffect(() => {
        setChecked(currentUser?.twentyFour);
    }, [currentUser?.twentyFour]);

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
                            <Radio onClick={() => {}} value="C">
                                Celsius
                            </Radio>
                        </HStack>
                    </RadioGroup>
                </FormControl>
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="24-hr-time" mb="0">
                        Enable 24 hour time?
                    </FormLabel>
                    <Switch
                        id="24-hr-time"
                        defaultChecked={checked}
                        onChange={timeHandler}
                    />
                </FormControl>
            </Stack>
        </Flex>
    );
};

export default UserSettings;
