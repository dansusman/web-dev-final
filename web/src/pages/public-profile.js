import React from "react";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findAllUsersThunk, findUserByIdThunk } from "../users/users-thunks";
import { findPostsByAuthorThunk } from "../posts/posts-thunks";
import {
    findFollowersThunk,
    findFollowingThunk,
} from "../follows/follows-thunks";
import BasicPage from "../components/basic-page";
import { Stack } from "@chakra-ui/react";
import UserCard from "../components/user-card";
import PostStream from "../components/post-stream";
import { FollowersModal } from "../components/users-list-modal";

const PublicProfile = () => {
    const { uid } = useParams();
    const { publicProfile } = useSelector((state) => state.users);
    const { followers, following } = useSelector((state) => state.follows);
    const { posts } = useSelector((state) => state.postsData);
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const nav = useNavigate();
    useEffect(() => {
        dispatch(findAllUsersThunk());
        if (uid === currentUser?._id) {
            nav("/profile");
            return;
        }
        dispatch(findUserByIdThunk(uid));
        dispatch(findPostsByAuthorThunk(uid));
        dispatch(findFollowersThunk(uid));
        dispatch(findFollowingThunk(uid));
    }, [uid, dispatch]);
    const imageGenerator = () => {
        if (!publicProfile) {
            return null;
        }
        const username = publicProfile.username;
        const url = `https://ui-avatars.com/api/?background=random&name=${username}`;
        return url;
    };
    return (
        <BasicPage
            user={currentUser}
            children={
                <Stack spacing={10}>
                    <UserCard
                        user={{
                            ...publicProfile,
                            image: imageGenerator(),
                            followerCount: followers.length,
                            followingCount: following.length,
                            followers: followers,
                            following: following,
                        }}
                    ></UserCard>
                    <PostStream forUser={publicProfile}></PostStream>
                    <div>
                        {following &&
                            following.map((follow) => (
                                <div>{follow.followed.username}</div>
                            ))}
                    </div>
                    <div>
                        {followers &&
                            followers.map((follow) => (
                                <div>{follow.follower.username}</div>
                            ))}
                    </div>
                </Stack>
            }
        ></BasicPage>
    );
};

export default PublicProfile;
