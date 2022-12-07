import {
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    SimpleGrid,
    useDisclosure,
} from "@chakra-ui/react";
import UserListItem from "./user-list-item";

export const UsersListModal = ({ text, users, followed }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button onClick={onOpen}>{text}</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {followed && <ModalHeader>Following</ModalHeader>}
                    {!followed && <ModalHeader>Followers</ModalHeader>}
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid columns={{ base: 1 }} spacing={"4"}>
                            {users.map((u, index) => (
                                <UserListItem
                                    followed={followed}
                                    user={u}
                                    key={index}
                                    showFollowButton={false}
                                />
                            ))}
                        </SimpleGrid>
                    </ModalBody>
                    <ModalFooter></ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};
