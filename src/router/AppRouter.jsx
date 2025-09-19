import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import LiftPage from "../pages/LiftPage.jsx";
import VirkerPage from "../pages/VirkerPage.jsx";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find-et-lift" element={<LiftPage/>} />
            <Route path="/sådan-virker-det" element={<VirkerPage />} />
        </Routes>
    );
}