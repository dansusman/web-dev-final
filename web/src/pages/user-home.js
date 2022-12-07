import {
    Avatar,
    HStack,
    Select,
    Stack,
    Tab,
    TabList,
    Tabs,
    useColorModeValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import CreatePost from "../components/create-post";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
import { findFollowingThunk } from "../follows/follows-thunks";
import cities from "../locations/locations";
import { findPostsThunk } from "../posts/posts-thunks";
const HomePage = () => {
    const [chronological, setChronological] = useState(true);
    const [wantLocation, setWantLocation] = useState(false);
    const [wantFollowing, setWantFollowing] = useState(false);
    const [location, setLocation] = useState(undefined);
    const { currentUser } = useSelector((state) => state.users);
    const { following, reload } = useSelector((state) => state.follows);
    const dispatch = useDispatch();
    const imageGenerator = () => {
        const username = currentUser?.username;
        const url = `https://ui-avatars.com/api/?background=random&name=${username}`;
        return url;
    };

    const locationHandler = (e) => {
        const lowerCase = e.target.value;
        setLocation(lowerCase);
    };
    const selectColor = useColorModeValue("white", "gray.800");

    useEffect(() => {
        dispatch(findPostsThunk(chronological));
    }, [chronological, dispatch]);

    useEffect(() => {
        if (currentUser) {
            dispatch(findFollowingThunk(currentUser._id));
        }
    }, [dispatch, currentUser, reload]);

    return (
        <BasicPage
            user={currentUser}
            children={
                <Stack spacing={10}>
                    <Stack spacing={5}>
                        <HStack spacing={5}>
                            <Avatar src={imageGenerator()} />
                            <CreatePost />
                        </HStack>
                        <PostBorder
                            children={
                                <Tabs
                                    variant="soft-rounded"
                                    colorScheme={"purple"}
                                >
                                    <TabList>
                                        <Tab
                                            onClick={() => {
                                                setWantFollowing(() => false);
                                                setWantLocation(() => false);
                                                return setChronological(
                                                    () => true
                                                );
                                            }}
                                        >
                                            New
                                        </Tab>
                                        <Tab
                                            onClick={() => {
                                                setWantFollowing(() => false);
                                                setWantLocation(() => false);
                                                return setChronological(
                                                    () => false
                                                );
                                            }}
                                        >
                                            Popular
                                        </Tab>
                                        <Tab
                                            onClick={() => {
                                                setWantFollowing(() => false);
                                                return setWantLocation(
                                                    () => true
                                                );
                                            }}
                                        >
                                            Location
                                        </Tab>
                                        {currentUser && (
                                            <Tab
                                                onClick={() => {
                                                    setWantLocation(
                                                        () => false
                                                    );
                                                    return setWantFollowing(
                                                        () => true
                                                    );
                                                }}
                                            >
                                                Following
                                            </Tab>
                                        )}
                                    </TabList>
                                </Tabs>
                            }
                        />
                        {wantLocation && (
                            <Select
                                onChange={locationHandler}
                                placeholder="Select a Location"
                                value={location}
                                bg={selectColor}
                            >
                                {cities.map((l, index) => (
                                    <option key={index}>{l}</option>
                                ))}
                            </Select>
                        )}
                    </Stack>
                    <PostStream
                        following={following}
                        chronological={chronological}
                        location={location}
                        wantLocation={wantLocation}
                        wantFollowing={wantFollowing}
                    />
                </Stack>
            }
        />
    );
};

export default HomePage;
