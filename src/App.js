import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Layout from "./components/layout/Layout";
import HomePage from "./pages/home/HomePage";
import ToppingsPage from "./pages/toppings/ToppingsPage";
import StuffingsPage from "./pages/stuffings/StuffingsPage";
import HistoryPage from "./pages/history/HistoryPage";
import OrderPage from "./pages/order/OrderPage";
import { HamburgerContext } from "./HamburgerContext";
import { MIN_COUNT } from "./data/Counts";
import calculatePrice from "./calculate/calculatePrice";

import "bootstrap-icons/font/bootstrap-icons.css";

export default function App() {
    const [hamburger, setHamburger] = useState({
        size: null,
        toppings: [],
        stuffings: [],
        count: MIN_COUNT,
        price: null,
        calories: null,
        addTopping(topping) {
            if (this.toppings.length !== this.size.maxTopping) {
                this.toppings.push(topping);
                const price = calculatePrice(this);
                return {
                    ...this,
                    price,
                };
            }
        },
        removeTopping(topping) {
            const toppings = this.toppings.filter((t) => t !== topping);
            return {
                ...this,
                toppings,
                price: this.price - topping.price,
            };
        },
        addStuffing(stuffing) {
            this.stuffings.push(stuffing);
            const price = calculatePrice(this);
            return {
                ...this,
                price,
            };
        },
        removeStuffing(stuffing) {
            const stuffings = this.stuffings.filter((s) => s !== stuffing);
            return {
                ...this,
                stuffings,
                price: this.price - stuffing.price,
            };
        },
        updateCount(count) {
            return {
                ...this,
                count,
            };
        },
    });

    return (
        <HamburgerContext.Provider value={{ hamburger, setHamburger }}>
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
