import { Box, HStack, Stack } from "@chakra-ui/react";
import BasicPage from "../components/basic-page";
import Location from "../components/location";
import PostStream from "../components/post-stream";
import ProfileCard from "../components/profile-card";
import UserSettings from "../components/user-settings";

const ProfilePage = () => {
    return (
        <BasicPage
            children={
                <HStack minH={"100vh"} align="top">
                    <Box w={{ base: "100%", xl: "70%" }}>
                        <PostStream />
                    </Box>
                    <Stack
                        spacing={"12"}
                        ps="4"
                        display={{ base: "none", xl: "block" }}
                        w="30%"
                    >
                        <ProfileCard />
                        <Location location={"Amsterdam"} />
                        <UserSettings />
                    </Stack>
                </HStack>
            }
        ></BasicPage>
    );
};

export default ProfilePage;
