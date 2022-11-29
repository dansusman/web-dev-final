import { useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import PostForm from "../components/post-form";

const Submit = () => {
    const { locationDefault } = useSelector((state) => state.locationSetting);
    return (
        <BasicPage children={<PostForm locationDefault={locationDefault} />} />
    );
};

export default Submit;
