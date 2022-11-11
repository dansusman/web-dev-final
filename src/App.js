import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { ChakraProvider } from "@chakra-ui/react";
import SignupCard from "./pages/register";
import LoginCard from "./pages/login";
import HomePage from "./pages/home";

function App() {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <div className="container">
                    <Routes>
                        <Route index element={<HomePage />}></Route>
                        <Route path="/login" element={<LoginCard />}></Route>
                        <Route
                            path="/register"
                            element={<SignupCard />}
                        ></Route>
                    </Routes>
                </div>
            </BrowserRouter>
        </ChakraProvider>
    );
}

export default App;
