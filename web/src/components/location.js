import {
    Button,
    Flex,
    Heading,
    HStack,
    Input,
    Select,
    Stack,
    useColorModeValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findWeatherThunk } from "../locations/location-thunks";
import cities from "../locations/locations";
import { updateUserThunk } from "../users/users-thunks";

const Location = () => {
    const { location } = useSelector((state) => state.locationsData);
    const { currentUser } = useSelector((state) => state.users);
    const [realLocation, setRealLocation] = useState(currentUser.location);
    const selectColor = useColorModeValue("white", "gray.800");
    const dispatch = useDispatch();
    const locationHandler = (e) => {
        const lowerCase = e.target.value;
        setRealLocation(lowerCase);
    };

    const clickHandler = () => {
        const changes = {
            ...currentUser,
            location: realLocation,
        };
        dispatch(updateUserThunk(changes));
    };

    useEffect(() => {
        dispatch(findWeatherThunk(realLocation));
    }, [dispatch, realLocation]);

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
                    <Heading fontSize={"xl"}>{location?.main?.temp}℉</Heading>
                    <Heading fontSize={"xl"}>
                        {location?.weather
                            ? location?.weather[0]?.main
                            : undefined}
                    </Heading>
                </HStack>
                <HStack>
                    <Select
                        onChange={locationHandler}
                        placeholder="Select a Location"
                        value={realLocation}
                        bg={selectColor}
                    >
                        {cities.map((l, index) => (
                            <option key={index}>{l}</option>
                        ))}
                    </Select>
                    <Button onClick={clickHandler}>Change</Button>
                </HStack>
            </Stack>
        </Flex>
    );
};

export default Location;
