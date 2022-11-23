import BasicPage from "../components/basic-page";
import PostForm from "../components/post-form";

const Submit = () => {
  return (
    <BasicPage children={<PostForm locationDefault={"Paris"} />} />
  );
};

export default Submit;
