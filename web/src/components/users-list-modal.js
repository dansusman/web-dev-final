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
    Text,
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
                    <ModalHeader>Followers</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <SimpleGrid columns={{ base: 1 }} spacing={"4"}>
                            {users.map((u, index) => (
                                <UserListItem
                                    followed={followed}
                                    user={u}
                                    key={index}
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
