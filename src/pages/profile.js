import { Box, HStack, Stack } from "@chakra-ui/react";
import Location from "../components/location";
import NavigationSidebar from "../components/navigation-sidebar";
import PostStream from "../components/post-stream";
import ProfileCard from "../components/profile-card";

const ProfilePage = () => {
    return (
        <NavigationSidebar>
            <HStack minH={"100vh"} align="top" pe="10">
                <Box w={{ base: "100%", xl: "70%" }}>
                    <PostStream />
                </Box>
                <Box ps="4" display={{ base: "none", xl: "block" }} w="30%">
                    <Stack spacing={0}>
                        <ProfileCard />
                        <Location location={"Amsterdam"} />
                    </Stack>
                </Box>
            </HStack>
        </NavigationSidebar>
    );
};

export default ProfilePage;
