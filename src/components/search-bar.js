import { SearchIcon } from "@chakra-ui/icons";
import {
    Input,
    InputGroup,
    InputLeftElement,
    useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router";

const SearchBar = (thing = false, content = "") => {
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
            width={"full"}
            rounded={"xl"}
            bg={bgColor}
            onChange={inputHandler}
            onKeyUp={handleSearch}
        >
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.500" />}
            />
            <Input type="tel" placeholder="Search smallTalk" />
        </InputGroup>
    );
};

export default SearchBar;
