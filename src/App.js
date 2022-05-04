import HomePage from "./pages/home/HomePage";
import ToppingsPage from "./pages/toppings/ToppingsPage";
import StuffingsPage from "./pages/stuffings/StuffingsPage.js";
import HistoryPage from "./pages/history/HistoryPage";
import OrderPage from "./pages/order/OrderPage";
import OrderButton from "./components/header/OrderButton";
import Layout from "./Layout";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout order={OrderButton} />}>
                <Route index element={<HomePage />} />
                <Route path="toppings" element={<ToppingsPage />} />
                <Route path="stuffings" element={<StuffingsPage />} />
                <Route path="history" element={<HistoryPage />} />
                <Route path="order" element={<OrderPage />} />
            </Route>
        </Routes>
    );
}
