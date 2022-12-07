import { Box, Heading, HStack, Spacer, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import PostStream from "../components/post-stream";
import UserStream from "../components/user-stream";
import { findFollowingThunk } from "../follows/follows-thunks";
import { findPostsThunk } from "../posts/posts-thunks";
import { findAllUsersThunk } from "../users/users-thunks";

const ModPage = () => {
    const { currentUser } = useSelector((state) => state.users);
    const { following, reload } = useSelector((state) => state.follows);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk());
        dispatch(findPostsThunk());
    }, []);
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
                        <Heading>Users</Heading>
                        <UserStream></UserStream>
                        <Heading>Posts</Heading>
                        <PostStream
                            following={following}
                            chronological={false}
                            location={""}
                            wantLocation={false}
                            wantFollowing={false}
                        />
                    </Stack>
                </Stack>
            }
        ></BasicPage>
    );
};

export default ModPage;
