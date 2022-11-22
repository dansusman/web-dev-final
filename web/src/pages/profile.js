import {
  Box,
  HStack,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicPage from "../components/basic-page";
import Location from "../components/location";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
import ProfileCard from "../components/profile-card";
import UserSettings from "../components/user-settings";
import { findWeatherThunk } from "../services/location-thunks";

const ProfilePage = () => {
  const [mine, setMine] = useState(true);
  const { locations, loading } = useSelector(
    (state) => state.locationsData
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findWeatherThunk("London"));
  }, [dispatch]);

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
            <Location location={locations[0]} />
            <UserSettings />
          </Stack>
        </HStack>
      }
    ></BasicPage>
  );
};

export default ProfilePage;
