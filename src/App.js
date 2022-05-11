import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./pages/home/HomePage";
import ToppingsPage from "./pages/toppings/ToppingsPage";
import StuffingsPage from "./pages/stuffings/StuffingsPage";
import HistoryPage from "./pages/history/HistoryPage";
import OrderPage from "./pages/order/OrderPage";
import { useState } from "react";
import { HamburgerContext } from "./HamburgerConfiguration";

export default function App() {
    const [hamburgerContext, setHamburgerContext] = useState({ size: null, toppings: [], stuffings: [] });
    return (
        <HamburgerContext.Provider value={[hamburgerContext, setHamburgerContext]}>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="toppings" element={<ToppingsPage />} />
                    <Route path="stuffings" element={<StuffingsPage />} />
                    <Route path="history" element={<HistoryPage />} />
                    <Route path="order" element={<OrderPage />} />
                </Route>
            </Routes>
        </HamburgerContext.Provider>
    );
}
