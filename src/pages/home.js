import React from "react";
import BasicPage from "../components/basic-page";
import PostStream from "../components/post-stream";
const HomePage = () => {
    return <BasicPage children={<PostStream homePage="true" />} />;
};

export default HomePage;
