import { Avatar, HStack, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import CreatePost from "../components/create-post";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
import { findFollowingThunk } from "../follows/follows-thunks";
import { findPostsThunk } from "../posts/posts-thunks";
import { profileThunk } from "../users/users-thunks";
const HomePage = () => {
    const [chronological, setChronological] = useState(true);
    const { currentUser } = useSelector((state) => state.users);
    const { following, reload } = useSelector((state) => state.follows);
    const dispatch = useDispatch();
    const imageGenerator = () => {
        const username = currentUser?.username;
        const url = `https://ui-avatars.com/api/?background=random&name=${username}`;
        return url;
    };
    useEffect(() => {
        dispatch(profileThunk());
    }, [dispatch]);

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
                                            onClick={() =>
                                                setChronological(
                                                    (chronological) =>
                                                        !chronological
                                                )
                                            }
                                        >
                                            New
                                        </Tab>
                                        <Tab
                                            onClick={() =>
                                                setChronological(
                                                    (chronological) =>
                                                        !chronological
                                                )
                                            }
                                        >
                                            Popular
                                        </Tab>
                                    </TabList>
                                </Tabs>
                            }
                        />
                    </Stack>
                    <PostStream
                        following={following}
                        chronological={chronological}
                    />
                </Stack>
            }
        />
    );
};

export default HomePage;
