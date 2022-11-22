import {
  Box,
  HStack,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { useState } from "react";
import BasicPage from "../components/basic-page";
import Location from "../components/location";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
import ProfileCard from "../components/profile-card";
import UserSettings from "../components/user-settings";

const ProfilePage = () => {
  const [mine, setMine] = useState(true);
  return (
    <BasicPage
      children={
        <HStack minH={"100vh"} align="top">
          <Box w={{ base: "100%", xl: "70%" }}>
            <Stack spacing={10}>
              <PostBorder
                children={
                  <Tabs variant="soft-rounded" colorScheme={"purple"}>
                    <TabList>
                      <Tab>My Posts</Tab>
                      <Tab>Liked Posts</Tab>
                    </TabList>
                  </Tabs>
                }
              />
              <PostStream />
            </Stack>
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
