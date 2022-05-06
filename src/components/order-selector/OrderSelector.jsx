import { useState } from "react";
import { MIN_COUNT, MAX_COUNT } from "../../data/Counts";
import calculatePrice from "../../calculate/calculatePrice";
import Info from "../info/Info";
import Check from "../check/Check";
import FillingsSelector from "../fillings-selector/FillingsSelector";
import CountAndPrice from "../count-and-price/CountAndPrice";
import STUFFINGS from "../../data/Stuffings";
import TOPPINGS from "../../data/Toppings";

export default function OrderSelector({ hamburger }) {
    const [order, setOrder] = useState({
        hamburger: JSON.parse(JSON.stringify(hamburger)),
        totalPrice: hamburger.size.price,
        count: MIN_COUNT,
    });

    const handleAddTopping = (topping) => {
        if (order.hamburger.toppings.length !== order.hamburger.size.maxTopping) {
            setOrder((prevState) => {
                prevState.hamburger.toppings.push(topping);
                prevState.totalPrice = calculatePrice(prevState.hamburger) * prevState.count;
                return JSON.parse(JSON.stringify(prevState));
            });
        }
    };

    const handleRemoveTopping = (topping) => {
        setOrder((prevState) => {
            const index = prevState.hamburger.toppings.indexOf(topping);
            prevState.hamburger.toppings.splice(index, 1);
            prevState.totalPrice = calculatePrice(prevState.hamburger) * prevState.count;
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleAddStuffing = (stuffing) => {
        setOrder((prevState) => {
            prevState.hamburger.stuffings.push(stuffing);
            prevState.totalPrice = calculatePrice(prevState.hamburger) * prevState.count;
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleRemoveStuffing = (stuffing) => {
        setOrder((prevState) => {
            const index = prevState.hamburger.stuffings.indexOf(stuffing);
            prevState.hamburger.stuffings.splice(index, 1);
            prevState.totalPrice = calculatePrice(prevState.hamburger) * prevState.count;
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleCountBlur = (event) => {
        let currentValue = event.target.valueAsNumber;

        if (currentValue !== order.count) {
            if (currentValue > MAX_COUNT) {
                currentValue = MAX_COUNT;
                event.target.value = currentValue;
            } else if (currentValue < MIN_COUNT) {
                currentValue = MIN_COUNT;
                event.target.value = currentValue;
            }
            setOrder((prevState) => {
                prevState.count = currentValue;
                prevState.totalPrice = calculatePrice(prevState.hamburger) * prevState.count;
                return JSON.parse(JSON.stringify(prevState));
            });
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <Info hamburger={order.hamburger} />
                <Check order={order} />
            </div>
            <div className="d-flex justify-content-between">
                <FillingsSelector
                    selectedFillings={order.hamburger.toppings}
                    onAdd={handleAddTopping}
                    onRemove={handleRemoveTopping}
                    fillings={TOPPINGS}
                    title="Topping"
                />
                <FillingsSelector
                    selectedFillings={order.hamburger.stuffings}
                    onAdd={handleAddStuffing}
                    onRemove={handleRemoveStuffing}
                    fillings={STUFFINGS}
                    title="Stuffing"
                />
            </div>
            <div className="border-bottom mb-4" />
            <CountAndPrice count={order.count} totalPrice={order.totalPrice} onCountBlur={handleCountBlur} />
        </>
    );
}
