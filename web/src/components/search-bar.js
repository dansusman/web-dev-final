import { SearchIcon } from "@chakra-ui/icons";
import {
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = () => {
    const bgColor = useColorModeValue("white", "gray.800");
    const [searchText, setSearchText] = useState("");
    const inputHandler = (e) => {
        const lowerCase = e.target.value.toLowerCase();
        setSearchText(lowerCase);
    };
    const nav = useNavigate();

    const handleSearch = (e) => {
        if (searchText === "") return;
        if (e.key === "Enter") {
            const url = "/search/" + encodeURI(searchText);
            nav(url);
        }
    };
    return (
        <InputGroup
            ms="4"
            width={"70%"}
            rounded={"full"}
            bg={bgColor}
            onChange={inputHandler}
            onKeyUp={handleSearch}
        >
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.500" />}
            />
            <Input rounded={"full"} type="tel" placeholder="Search smallTalk" />
        </InputGroup>
    );
};

export default SearchBar;
