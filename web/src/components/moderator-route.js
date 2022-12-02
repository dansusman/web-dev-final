import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { profileThunk } from "../services/users-thunks";

const ModeratorRoute = ({ children }) => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, []);
    if (currentUser && currentUser.type === "Moderator") {
        return children;
    } else {
        return <Navigate to={"/"} />;
    }
};
export default ModeratorRoute;
