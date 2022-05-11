import { useContext } from "react";

import calculatePrice from "../../calculate/calculatePrice";
import Info from "../info/Info";
import Check from "../check/Check";
import FillingsSelector from "../fillings-selector/FillingsSelector";
import CountAndPrice from "../count-and-price/CountAndPrice";
import stuffings from "../../data/Stuffings";
import toppings from "../../data/Toppings";
import { HamburgerContext } from "../../HamburgerContext";

export default function OrderSelector() {
    const { hamburger, setHamburger } = useContext(HamburgerContext);

    const totalPrice = calculatePrice(hamburger) * hamburger.count;

    const handleAddTopping = (topping) => {
        setHamburger(hamburger.addTopping(topping));
    };

    const handleRemoveTopping = (topping) => {
        setHamburger(hamburger.removeTopping(topping));
    };

    const handleAddStuffing = (stuffing) => {
        setHamburger(hamburger.addStuffing(stuffing));
    };

    const handleRemoveStuffing = (stuffing) => {
        setHamburger(hamburger.removeStuffing(stuffing));
    };

    const handleCountChange = (newCount) => {
        setHamburger((prevState) => ({
            ...prevState,
            count: newCount,
        }));
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <Info hamburger={hamburger} />
                <Check totalPrice={totalPrice} />
            </div>
            <div className="d-flex justify-content-between">
                <FillingsSelector
                    selectedFillings={hamburger.toppings}
                    onAdd={handleAddTopping}
                    onRemove={handleRemoveTopping}
                    fillings={toppings}
                    title="Topping"
                />
                <FillingsSelector
                    selectedFillings={hamburger.stuffings}
                    onAdd={handleAddStuffing}
                    onRemove={handleRemoveStuffing}
                    fillings={stuffings}
                    title="Stuffing"
                />
            </div>
            <div className="border-bottom mb-4" />
            <CountAndPrice
                count={hamburger.count}
                totalPrice={totalPrice}
                onCountChange={handleCountChange}
            />
        </>
    );
}
