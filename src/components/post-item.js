import {
    Avatar,
    Button,
    chakra,
    CloseButton,
    Flex,
    Heading,
    IconButton,
    Stack,
} from "@chakra-ui/react";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import Interactions from "./interactions";
import PostBorder from "./post-border";

const backgrounds = [
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED64A6' /%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%23F56565' /%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%2338B2AC' /%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED8936' /%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ED8936'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%2348BB78'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%230BC5EA'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='102.633' cy='61.0737' rx='102.633' ry='61.0737' fill='%23ED8936'/%3E%3Cellipse cx='399.573' cy='123.926' rx='102.633' ry='61.0737' fill='%2348BB78'/%3E%3Cellipse cx='366.192' cy='73.2292' rx='193.808' ry='73.2292' fill='%230BC5EA'/%3E%3Cellipse cx='222.705' cy='110.585' rx='193.808' ry='73.2292' fill='%23ED64A6'/%3E%3C/svg%3E")`,
    `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='560' height='185' viewBox='0 0 560 185' fill='none'%3E%3Cellipse cx='457.367' cy='123.926' rx='102.633' ry='61.0737' transform='rotate(-180 457.367 123.926)' fill='%23ECC94B'/%3E%3Cellipse cx='160.427' cy='61.0737' rx='102.633' ry='61.0737' transform='rotate(-180 160.427 61.0737)' fill='%239F7AEA'/%3E%3Cellipse cx='193.808' cy='111.771' rx='193.808' ry='73.2292' transform='rotate(-180 193.808 111.771)' fill='%234299E1'/%3E%3Cellipse cx='337.295' cy='74.415' rx='193.808' ry='73.2292' transform='rotate(-180 337.295 74.415)' fill='%2348BB78'/%3E%3C/svg%3E")`,
];

const PostItem = (props) => {
    const { name, username, content, avatar, title, index } = props;
    return (
        <PostBorder background={{ backgroundImage: backgrounds[index % 4] }}>
            <Flex
                direction={"column"}
                textAlign={"left"}
                justifyContent={"space-between"}
            >
                <Heading size="lg">{title}</Heading>
                <chakra.p fontWeight={"medium"} fontSize={"15px"} pb={4}>
                    {content}
                </chakra.p>
                <Interactions />
            </Flex>
            <Stack ms="5" me="5" spacing={0} align="center" minW="100px">
                <Avatar src={avatar} height={"80px"} width={"80px"} />
                <chakra.p fontWeight={"bold"} fontSize={14}>
                    {name}
                </chakra.p>
                <chakra.p fontWeight={"medium"} color={"gray.500"}>
                    @{username}
                </chakra.p>
                <Button
                    flex="1"
                    p="2"
                    variant="ghost"
                    leftIcon={<NightsStayIcon />}
                    onClick={(e) => {
                        e.preventDefault();
                    }}
                >
                    Weather
                </Button>
            </Stack>
            <IconButton
                position="absolute"
                right={"4"}
                top={"4"}
                onClick={(e) => {
                    e.preventDefault();
                }}
                backgroundColor={"transparent"}
                _hover={{
                    bg: "transparent",
                }}
                icon={<CloseButton />}
            />
        </PostBorder>
    );
};

export default PostItem;
