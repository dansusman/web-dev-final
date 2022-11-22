import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Center,
  chakra,
  Flex,
  HStack,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import SearchBar from "./search-bar";

export default function NavTopBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Box px="4" mb="5">
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Link
            textDecoration={"none"}
            href="/"
            fontSize="2xl"
            fontWeight="bold"
            color={useColorModeValue("purple.500", "purple.300")}
          >
            smallTalk
          </Link>
          <SearchBar />
          <Flex alignItems={"center"}>
            <Stack direction={"row"}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <HStack>
                    <Avatar size={"sm"} />
                    <VStack
                      display={{
                        base: "none",
                        md: "flex",
                      }}
                      alignItems="flex-start"
                      spacing="1px"
                      ml="2"
                    >
                      <Text fontSize="sm">Philip Cortez</Text>
                      <Text fontSize="xs" color="gray.600">
                        Moderator
                      </Text>
                    </VStack>
                  </HStack>
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar size={"lg"} />
                  </Center>
                  <Center>
                    <chakra.p color={"gray.500"}>
                      @weatherman3
                    </chakra.p>
                  </Center>
                  <Center>
                    <chakra.p color={"gray.500"}>Moderator</chakra.p>
                  </Center>
                  <MenuDivider mb="0" />
                  <MenuItem as={Link} href="/profile">
                    View Profile
                  </MenuItem>
                  <MenuItem as={Link} href="/login">
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
