import { useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import PostForm from "../components/post-form";

const Submit = () => {
    const { locationDefault } = useSelector((state) => state.locationSetting);
    const { currentUser } = useSelector((state) => state.users);
    return (
        <BasicPage
            user={currentUser}
            children={<PostForm locationDefault={locationDefault} />}
        />
    );
};

export default Submit;
