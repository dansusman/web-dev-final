import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import UserStream from "../components/user-stream";
import { findAllUsersThunk } from "../users/users-thunks";

const UserPage = () => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findAllUsersThunk());
    }, [dispatch]);

    return (
        <BasicPage
            user={currentUser}
            children={<UserStream></UserStream>}
        ></BasicPage>
    );
};
export default UserPage;
