import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk } from "../users/users-thunks";
import { findPostsByAuthorThunk } from "../posts/posts-thunks";
import {
    findFollowersThunk,
    findFollowingThunk,
} from "../follows/follows-thunks";

const PublicProfile = () => {
    const { uid } = useParams();
    const { publicProfile } = useSelector((state) => state.users);
    const { followers, following } = useSelector((state) => state.follows);
    const { posts } = useSelector((state) => state.postsData);
    // const { reviews } = useSelector((state) => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid));
        dispatch(findPostsByAuthorThunk(uid));
        dispatch(findFollowersThunk(uid));
        dispatch(findFollowingThunk(uid));
    }, [uid, dispatch]);
    return (
        <>
            <h1>{publicProfile && publicProfile.username}</h1>
            <ul>{posts && posts.map((post) => <li>{post.title}</li>)}</ul>
            <h2>Following</h2>
            <div>
                {following &&
                    following.map((follow) => (
                        <div>{follow.followed.username}</div>
                    ))}
            </div>
            <h2>Followers</h2>
            <div>
                {followers &&
                    followers.map((follow) => (
                        <div>{follow.follower.username}</div>
                    ))}
            </div>
        </>
    );
};

export default PublicProfile;
