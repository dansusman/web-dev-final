import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";
import LoginCard from "./pages/login";
import ProfilePage from "./pages/profile";
import SignupCard from "./pages/register";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<HomePage />}></Route>
                    <Route path="/login" element={<LoginCard />}></Route>
                    <Route path="/profile" element={<ProfilePage />}></Route>
                    <Route path="/register" element={<SignupCard />}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
