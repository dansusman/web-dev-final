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
import { updateUserThunk } from "../users/users-thunks";

const UserSettings = ({ currentUser }) => {
    const dispatch = useDispatch();
    const [checked, setChecked] = useState(currentUser.twentyFour);
    const timeHandler = () => {
        setChecked((checked) => !checked);
        const updates = {
            ...currentUser,
            twentyFour: !checked,
        };
        dispatch(updateUserThunk(updates));
    };

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
                <FormControl display="flex" alignItems="center">
                    <FormLabel htmlFor="24-hr-time" mb="0">
                        Enable 24 hour time?
                    </FormLabel>
                    <Switch
                        id="24-hr-time"
                        defaultChecked={!currentUser || currentUser.twentyFour}
                        onChange={timeHandler}
                    />
                </FormControl>
            </Stack>
        </Flex>
    );
};

export default UserSettings;
