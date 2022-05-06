import SizeSelector from "./size-selector/SizeSelector";
import FillingsSelector from "./fillings-selector/FillingsSelector";
import Check from "./check/Check";
import Info from "./info/Info";
import { useState } from "react";
import SIZES from "../Sizes";
import TOPPINGS from "../Toppings";
import STUFFINGS from "../Stuffings";
import CountAndPrice from "./count-and-price/CountAndPrice";
import { MIN_COUNT, MAX_COUNT } from "../Counts";
import calculatePrice from "../calculatePrice";

export default function OrderCreator() {
    const [order, setOrder] = useState(null);

    const handleSizeSelect = (size) => {
        setOrder({
            hamburger: { size, toppings: [], stuffings: [] },
            count: MIN_COUNT,
            totalPrice: size.price,
        });
    };

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
            {order === null ? (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Select Size</h1>
                    <SizeSelector sizes={SIZES} onSelect={handleSizeSelect} />
                </>
            ) : (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Build up your favorite hamburger</h1>
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
                    <CountAndPrice order={order} handleCountBlur={handleCountBlur} />
                </>
            )}
        </>
    );
}
