import { Avatar, HStack, Stack, Tab, TabList, Tabs } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import CreatePost from "../components/create-post";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
import { findPostsThunk } from "../services/posts-thunks";
import { findAllUsersThunk, profileThunk } from "../services/users-thunks";
const HomePage = () => {
    const [chronological, setChronological] = useState(true);
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, [dispatch]);

    useEffect(() => {
        dispatch(findPostsThunk(chronological));
    }, [chronological]);
    console.log(currentUser);
    return (
        <BasicPage
            user={currentUser}
            children={
                <Stack spacing={10}>
                    <Stack spacing={5}>
                        <HStack spacing={5}>
                            <Avatar />
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
                    <PostStream chronological={chronological} />
                </Stack>
            }
        />
    );
};

export default HomePage;
