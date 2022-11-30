import { Box, HStack, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import Location from "../components/location";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
import ProfileCard from "../components/profile-card";
import UserSettings from "../components/user-settings";
import { findWeatherThunk } from "../services/location-thunks";
import { findAllUsersThunk } from "../services/users-thunks";

const ProfilePage = () => {
    const { locations } = useSelector((state) => state.locationsData);
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findWeatherThunk("London"));
    }, [dispatch]);

    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, [dispatch]);
    return (
        <BasicPage
            user={users[0]}
            children={
                <HStack minH={"100vh"} align="top">
                    <Box w={{ base: "100%", xl: "70%" }}>
                        <Stack spacing={10}>
                            <PostBorder
                                children={
                                    <Tabs
                                        variant="soft-rounded"
                                        colorScheme={"purple"}
                                    >
                                        <TabList>
                                            <Tab>My Posts</Tab>
                                            <Tab>Liked Posts</Tab>
                                        </TabList>
                                    </Tabs>
                                }
                            />
                            <PostStream />
                        </Stack>
                    </Box>
                    <Stack
                        spacing={"12"}
                        ps="4"
                        display={{ base: "none", xl: "block" }}
                        w="30%"
                    >
                        <ProfileCard user={users[0]} />
                        <Location location={locations[0]} />
                        <UserSettings currentUser={users[0]} />
                    </Stack>
                </HStack>
            }
        ></BasicPage>
    );
};

export default ProfilePage;
