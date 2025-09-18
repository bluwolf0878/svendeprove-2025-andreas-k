import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ProductPage from "../pages/VirkerPage.jsx";
import LoginPage from "../pages/LiftPage.jsx";

export function AppRouter() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/find et lift" element={<LoginPage />} />
            <Route path="/sådan virker det" element={<ProductPage />} />
        </Routes>
    );
}