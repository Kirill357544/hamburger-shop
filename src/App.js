import Hamburger from "./Hamburger";
import HomePage from "./pages/home/HomePage";
import ToppingsPage from "./pages/toppings/ToppingsPage";
import StuffingsPage from "./pages/stuffings/StuffingsPage.js";
import HistoryPage from "./pages/history/HistoryPage";

import OrderButton from "./components/header/OrderButton";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import OrderStorage from "./OrderStorage";
import HamburgerCreator from "./HamburgerCreator";

// OrderStorage.add({
//     date: Date.now(),
//     size: "Large",
//     count: 6,
//     totalPrice: 25,
// });

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout order={OrderButton} />}>
                <Route index element={<HomePage />} />
                <Route path="toppings" element={<ToppingsPage />} />
                <Route path="stuffings" element={<StuffingsPage />} />
                <Route path="history" element={<HistoryPage />} />
                <Route path="order" element={<HamburgerCreator />} />
            </Route>
        </Routes>
    );
}
