import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { profileThunk } from "../users/users-thunks";
import HomePage from "./user-home";
import ModPage from "./mod-home";

const Home = () => {
    const { currentUser } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(profileThunk());
    }, [dispatch]);

    return currentUser?.type === "Moderator" ? <ModPage /> : <HomePage />;
};

export default Home;
