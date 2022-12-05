import { Box, HStack, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import Location from "../components/location";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
import ProfileCard from "../components/profile-card";
import UserSettings from "../components/user-settings";
import { findWeatherThunk } from "../locations/location-thunks";
import {
    findPostsByAuthorThunk,
    findPostsLikedByUserThunk,
} from "../posts/posts-thunks";
import { profileThunk } from "../users/users-thunks";

const ProfilePage = () => {
    const { locations } = useSelector((state) => state.locationsData);
    const { currentUser } = useSelector((state) => state.users);
    const { following } = useSelector((state) => state.follows);
    const [wantLiked, setWantLiked] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findWeatherThunk("London"));
    }, [dispatch]);

    useEffect(() => {
        if (wantLiked) {
            dispatch(findPostsLikedByUserThunk(currentUser?._id));
        } else {
            dispatch(findPostsByAuthorThunk(currentUser?._id));
        }
    }, [wantLiked, dispatch]);

    useEffect(() => {
        dispatch(profileThunk());
    }, [dispatch]);

    const clickHandler = () => {
        setWantLiked((wantLiked) => !wantLiked);
    };

    return (
        <BasicPage
            user={currentUser}
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
                                            <Tab onClick={clickHandler}>
                                                My Posts
                                            </Tab>
                                            <Tab onClick={clickHandler}>
                                                Liked Posts
                                            </Tab>
                                        </TabList>
                                    </Tabs>
                                }
                            />
                            <PostStream
                                forUser={currentUser?._id}
                                liked={wantLiked}
                                following={following}
                            />
                        </Stack>
                    </Box>
                    <Stack
                        spacing={"12"}
                        ps="4"
                        display={{ base: "none", xl: "block" }}
                        w="30%"
                    >
                        <ProfileCard user={currentUser} />
                        <Location location={locations[0]} />
                        <UserSettings currentUser={currentUser} />
                    </Stack>
                </HStack>
            }
        ></BasicPage>
    );
};

export default ProfilePage;
