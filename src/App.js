import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import ToppingsPage from "./pages/toppings/ToppingsPage";
import StuffingsPage from "./pages/stuffings/StuffingsPage";
import HistoryPage from "./pages/history/HistoryPage";
import OrderPage from "./pages/order/OrderPage";
import { HamburgerContext } from "./HamburgerConfiguration";
import { MIN_COUNT } from "./data/Counts";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
    const [hamburgerContext, setHamburgerContext] = useState({
        size: null,
        toppings: [],
        stuffings: [],
        count: MIN_COUNT,
        price: null,
        calories: null,
    });

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
