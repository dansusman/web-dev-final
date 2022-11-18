import { ChatIcon, StarIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
const Interactions = () => {
    return (
        <Stack spacing={"14"} direction={["column", "row"]}>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                }}
                variant="ghost"
                leftIcon={<ChatIcon />}
            >
                Comment
            </Button>
            <Button
                onClick={(e) => {
                    e.preventDefault();
                }}
                variant="ghost"
                leftIcon={<StarIcon />}
            >
                Like
            </Button>
        </Stack>
    );
};

export default Interactions;
