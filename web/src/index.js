import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme";
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./posts/posts-reducer";
import { Provider } from "react-redux";
import locationsReducer, {
    locationSettingReducer,
} from "./locations/locations-reducer";
import usersReducer from "./users/users-reducer";
import likesReducer from "./likes/likes-reducer";
import followsReducer from "./follows/follows-reducer";

const store = configureStore({
    reducer: {
        postsData: postsReducer,
        locationsData: locationsReducer,
        users: usersReducer,
        locationSetting: locationSettingReducer,
        likes: likesReducer,
        follows: followsReducer,
    },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode="dark" />
                <App />
            </ChakraProvider>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
