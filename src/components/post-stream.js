import { Flex, SimpleGrid, Tab, TabList, Tabs } from "@chakra-ui/react";
import PostBorder from "./post-border";
import PostItem from "./post-item";

const testimonials = [
    {
        name: "Brandon P.",
        username: "brandonp",
        content:
            "It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!",
        avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Krysta B.",
        username: "krysta",
        content:
            "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
        avatar: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Darcy L.",
        username: "movieStarDar",
        content:
            "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80",
    },
    {
        name: "Daniel T.",
        username: "guitarManJones",
        content:
            "I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!",
        avatar: "https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80",
    },
];

const PostStream = ({ homePage = false }) => {
    return (
        <Flex
            textAlign={"center"}
            justifyContent={"center"}
            direction={"column"}
            width={homePage ? "90%" : "full"}
        >
            <SimpleGrid columns={{ base: 1 }} spacing={"10"}>
                {!homePage && (
                    <PostBorder
                        children={
                            <Tabs variant="soft-rounded" colorScheme={"purple"}>
                                <TabList>
                                    <Tab>All Posts</Tab>
                                    <Tab>My Posts</Tab>
                                    <Tab>Liked Posts</Tab>
                                </TabList>
                            </Tabs>
                        }
                    />
                )}
                {homePage && (
                    <PostBorder
                        children={
                            <Tabs variant="soft-rounded" colorScheme={"purple"}>
                                <TabList>
                                    <Tab>Featured</Tab>
                                    <Tab>New</Tab>
                                    <Tab>Popular</Tab>
                                </TabList>
                            </Tabs>
                        }
                    />
                )}
                {testimonials.map((cardInfo, index) => (
                    <PostItem {...cardInfo} index={index} />
                ))}
            </SimpleGrid>
        </Flex>
    );
};

export default PostStream;
