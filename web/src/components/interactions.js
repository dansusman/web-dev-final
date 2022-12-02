import { ChatIcon } from "@chakra-ui/icons";
import { Button, HStack, Stack, Text } from "@chakra-ui/react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AirIcon from "@mui/icons-material/Air";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import CloudIcon from "@mui/icons-material/Cloud";
import NightsStay from "@mui/icons-material/NightsStay";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
    findUsersThatLikePostThunk,
    userLikesPostThunk,
    userUnlikesPostThunk,
} from "../likes/likes-thunks";
import { useEffect, useMemo } from "react";

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
    const { likers } = useSelector((state) => state.likes);
    const { currentUser } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(findUsersThatLikePostThunk(post._id));
    }, [post]);

    const likedByCurrent = useMemo(() => {
        return (
            currentUser &&
            likers.filter((u) => u._id === currentUser._id).length > 0
        );
    }, [currentUser, likers]);

    return (
        <Stack spacing={"14"} direction={["column", "row"]}>
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
                            <Text>{post.temperature}</Text>
                            <Text>{post.conditions}</Text>
                        </HStack>
                    </Button>
                </HStack>
            )}
            <Button
                onClick={(e) => {
                    nav(`/post/${post._id}`);
                    e.preventDefault();
                }}
                variant="ghost"
                leftIcon={<ChatIcon />}
            >
                {post.repliesCount}
            </Button>
            <Button
                onClick={(e) => {
                    // dispatch(
                    //     updatePostThunk({
                    //         ...post,
                    //         likes: post.liked
                    //             ? (parseInt(post.likes) - 1).toString()
                    //             : (parseInt(post.likes) + 1).toString(),
                    //         liked: !post.liked,
                    //     })
                    // );
                    if (likedByCurrent) {
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
                    e.preventDefault();
                }}
                variant="ghost"
                leftIcon={
                    likedByCurrent ? (
                        <FavoriteIcon sx={{ color: "red" }} />
                    ) : (
                        <FavoriteBorderIcon />
                    )
                }
            >
                {likers.length}
            </Button>
        </Stack>
    );
};

export default Interactions;
