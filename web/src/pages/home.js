import {
  Avatar,
  HStack,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import React, { useState } from "react";
import BasicPage from "../components/basic-page";
import CreatePost from "../components/create-post";
import PostBorder from "../components/post-border";
import PostStream from "../components/post-stream";
const HomePage = () => {
  const [chronological, setChronological] = useState(true);
  return (
    <BasicPage
      children={
        <Stack spacing={10}>
          <Stack spacing={5}>
            <HStack spacing={5}>
              <Avatar />
              <CreatePost />
            </HStack>
            <PostBorder
              children={
                <Tabs variant="soft-rounded" colorScheme={"purple"}>
                  <TabList>
                    <Tab onClick={() => setChronological(true)}>
                      New
                    </Tab>
                    <Tab onClick={() => setChronological(false)}>
                      Popular
                    </Tab>
                  </TabList>
                </Tabs>
              }
            />
          </Stack>
          <PostStream />
        </Stack>
      }
    />
  );
};

export default HomePage;
