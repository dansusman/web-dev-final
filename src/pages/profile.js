import { Box, HStack } from "@chakra-ui/react";
import BasicPage from "../components/basic-page";
import Location from "../components/location";
import PostStream from "../components/post-stream";
import ProfileCard from "../components/profile-card";

const ProfilePage = () => {
    return (
        <BasicPage
            children={
                <HStack minH={"100vh"} align="top">
                    <Box w={{ base: "100%", xl: "70%" }}>
                        <PostStream />
                    </Box>
                    <Box ps="4" display={{ base: "none", xl: "block" }} w="30%">
                        <ProfileCard />
                        <Location location={"Amsterdam"} />
                    </Box>
                </HStack>
            }
        ></BasicPage>
    );
};

export default ProfilePage;
