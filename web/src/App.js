import React from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import LoginCard from "./pages/login";
import Post from "./pages/post-details";
import Search from "./pages/search";
import ProfilePage from "./pages/profile";
import SignupCard from "./pages/register";
import Submit from "./pages/submit";
import ProtectedRoute from "./components/protected-route";
import PublicProfile from "./pages/public-profile";
import UserPage from "./pages/users";
import ModeratorRoute from "./components/moderator-route";
import BasicPage from "./components/basic-page";
import Home from "./pages/home";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route index element={<Home />}></Route>
                    <Route
                        path="/login"
                        element={
                            <BasicPage>
                                <LoginCard />
                            </BasicPage>
                        }
                    ></Route>
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <ProfilePage />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route path="/register" element={<SignupCard />}></Route>
                    <Route
                        path="/users"
                        element={
                            <ModeratorRoute>
                                <UserPage />
                            </ModeratorRoute>
                        }
                    ></Route>
                    <Route path="/post/:pid" element={<Post />}></Route>
                    <Route path="/search/*" element={<Search />}></Route>
                    <Route
                        path="/submit/*"
                        element={
                            <ProtectedRoute>
                                <Submit />
                            </ProtectedRoute>
                        }
                    ></Route>
                    <Route path="/profile/:uid" element={<PublicProfile />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
