import { useContext } from "react";

import calculatePrice from "../../calculate/calculatePrice";
import Info from "../info/Info";
import Check from "../check/Check";
import FillingsSelector from "../fillings-selector/FillingsSelector";
import CountAndPrice from "../count-and-price/CountAndPrice";
import stuffings from "../../data/Stuffings";
import toppings from "../../data/Toppings";
import { HamburgerContext } from "../../HamburgerConfiguration";

export default function OrderSelector() {
    const { hamburger, setHamburger } = useContext(HamburgerContext);

    const totalPrice = calculatePrice(hamburger) * hamburger.count;

    const handleAddTopping = (topping) => {
        if (hamburger.toppings.length !== hamburger.size.maxTopping) {
            setHamburger((prevState) => {
                prevState.toppings.push(topping);
                prevState.price = calculatePrice(prevState);
                return JSON.parse(JSON.stringify(prevState));
            });
        }
    };

    const handleRemoveTopping = (topping) => {
        setHamburger((prevState) => {
            const toppings = prevState.toppings.filter((t) => t !== topping);
            return {
                ...prevState,
                toppings,
                price: prevState.price - topping.price,
            };
        });
    };

    const handleAddStuffing = (stuffing) => {
        setHamburger((prevState) => {
            prevState.stuffings.push(stuffing);
            prevState.price = calculatePrice(prevState);
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleRemoveStuffing = (stuffing) => {
        setHamburger((prevState) => {
            const stuffings = prevState.stuffings.filter((s) => s !== stuffing);
            return {
                ...prevState,
                stuffings,
                price: prevState.price - stuffing.price,
            };
        });
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
