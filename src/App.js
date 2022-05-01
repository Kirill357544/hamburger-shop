import Hamburger from "./Hamburger";
import Home from "./components/Home";
import Fillings from "./components/Fillings";
import History from "./components/History";
import OrderButton from "./components/OrderButton";
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
                <Route index element={<Home />} />
                <Route
                    path="toppings"
                    element={<Fillings title="Toppings" fillings={Hamburger.TOPPINGS} />}
                />
                <Route
                    path="stuffings"
                    element={<Fillings title="Stuffings" fillings={Hamburger.STUFFINGS} />}
                />
                <Route path="history" element={<History OrderStorage={OrderStorage} />} />
                <Route path="order" element={<HamburgerCreator />} />
            </Route>
        </Routes>
    );
}
