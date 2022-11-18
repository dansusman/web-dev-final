import { Box, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import NavTopBar from "../components/top-bar";
const BasicPage = ({ children }) => {
    return (
        <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
            <Box ml={{ base: 0, md: 20 }} mr={{ base: 0, md: 20 }} p="4">
                <NavTopBar />
                {children}
            </Box>
        </Box>
    );
};

export default BasicPage;
