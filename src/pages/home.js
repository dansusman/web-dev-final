import React from "react";
import NavigationSidebar from "../components/navigation-sidebar";
import PostStream from "../components/post-stream";
const HomePage = () => {
    return (
        <>
            <NavigationSidebar children={<PostStream homePage={true} />} />
        </>
    );
};

export default HomePage;
