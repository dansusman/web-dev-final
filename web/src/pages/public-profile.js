import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { findUserByIdThunk } from "../users/users-thunks";

const PublicProfile = () => {
    const { uid } = useParams();
    const { publicProfile } = useSelector((state) => state.users);
    // const { reviews } = useSelector((state) => state.reviews);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findUserByIdThunk(uid));
        // dispatch(findPostByIdThunk(uid));
    }, [uid, dispatch]);
    return (
        <>
            <h1>{publicProfile && publicProfile.username}</h1>
            <h1>Posts</h1>
            {/* <PostStream user={currentUser} /> TODO*/}
        </>
    );
};

export default PublicProfile;
