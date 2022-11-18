import { ChatIcon, StarIcon } from "@chakra-ui/icons";
import { Button, Spacer, Stack } from "@chakra-ui/react";
const Interactions = () => {
    return (
        <Stack ps="8" spacing={"14"} direction={["column", "row"]}>
            <Button width={"10"} variant="ghost" leftIcon={<ChatIcon />}>
                Comment
            </Button>
            <Button variant="ghost" leftIcon={<StarIcon />}>
                Like
            </Button>
        </Stack>
    );
};

export default Interactions;
