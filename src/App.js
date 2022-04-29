import Hamburger from "./Hamburger";
import Home from "./components/Home";
import Header from "./components/Header";
import Fillings from "./components/Fillings";
import formatPrice from "./formatter/formatPrice";
import OrderButton from "./components/OrderButton";
import { Routes, Route } from "react-router-dom";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Header order={OrderButton} />}>
                <Route index element={<Home />} />
                <Route
                    path="toppings"
                    element={
                        <Fillings title="Toppings" fillings={Hamburger.TOPPINGS} formatPrice={formatPrice} />
                    }
                />
                <Route
                    path="stuffings"
                    element={
                        <Fillings
                            title="Stuffings"
                            fillings={Hamburger.STUFFINGS}
                            formatPrice={formatPrice}
                        />
                    }
                />
            </Route>
        </Routes>
    );
}
