import { ChatIcon } from "@chakra-ui/icons";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AirIcon from "@mui/icons-material/Air";
import CloudIcon from "@mui/icons-material/Cloud";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import NightsStay from "@mui/icons-material/NightsStay";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
    findUsersThatLikePostThunk,
    userLikesPostThunk,
    userUnlikesPostThunk,
} from "../likes/likes-thunks";

const icons = [
    <NightsStay />,
    <ThunderstormIcon />,
    <WbSunnyIcon />,
    <AcUnitIcon />,
    <CloudIcon />,
    <AirIcon />,
];

const getIcon = (iconCode) => {
    switch (iconCode?.toString()) {
        case "01n":
        case "02n":
        case "03n":
            // night time
            return icons[0];
        case "09d":
        case "09n":
        case "10d":
        case "10n":
        case "11d":
        case "11n":
            // rain
            return icons[1];
        case "01d":
            // sunny
            return icons[2];
        case "13d":
        case "13n":
            // snow
            return icons[3];
        case "02d":
        case "03d":
        case "04d":
        case "04n":
            // cloudy
            return icons[4];
        case "50d":
        case "50n":
            // misty
            return icons[5];
        default:
            // default to sunny because :D
            return icons[2];
    }
};

const Interactions = ({ post }) => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const icon = getIcon(post.weatherIconCode);
    const { currentUser } = useSelector((state) => state.users);
    const { likers, likes } = useSelector((state) => state.likes);

    useEffect(() => {
        dispatch(findUsersThatLikePostThunk(post._id));
    }, [likes, dispatch]);

    const liked =
        likers[post._id]?.filter((u) => {
            return u.user._id === currentUser?._id;
        }).length > 0;

    return (
        <Stack spacing={"5"} direction={["row"]}>
            {post.location && (
                <HStack>
                    <Button
                        p="2"
                        variant="ghost"
                        leftIcon={icon}
                        onClick={(e) => {
                            dispatch({
                                type: "location/selectLocation",
                                payload: post.location,
                            });
                            nav("/submit");
                            e.preventDefault();
                        }}
                    >
                        <HStack spacing="2">
                            <Text>{post.location}</Text>
                            <Text display={{ base: "none", lg: "block" }}>
                                {post.temperature}℉
                            </Text>
                            <Text display={{ base: "none", lg: "block" }}>
                                {post.conditions}
                            </Text>
                        </HStack>
                    </Button>
                </HStack>
            )}
            <Button
                onClick={(e) => {
                    nav(`/post/${post._id}`);
                    e.preventDefault();
                }}
                maxW="50px"
                variant="ghost"
                leftIcon={<ChatIcon />}
            >
                {post.repliesCount}
            </Button>
            <Button
                maxW="50px"
                onClick={(e) => {
                    e.preventDefault();
                    if (!currentUser) {
                        nav("/login");
                        return;
                    }
                    if (liked) {
                        dispatch(
                            userUnlikesPostThunk({
                                uid: currentUser?._id,
                                pid: post._id,
                            })
                        );
                    } else {
                        dispatch(
                            userLikesPostThunk({
                                uid: currentUser?._id,
                                pid: post._id,
                            })
                        );
                    }
                }}
                variant="ghost"
                leftIcon={
                    liked ? (
                        <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                        <FavoriteBorderIcon />
                    )
                }
            >
                {likers[post._id]?.length}
            </Button>
        </Stack>
    );
};

export default Interactions;
