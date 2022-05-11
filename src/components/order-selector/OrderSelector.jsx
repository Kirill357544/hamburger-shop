import { useState } from "react";
import { MIN_COUNT } from "../../data/Counts";
import calculatePrice from "../../calculate/calculatePrice";
import Info from "../info/Info";
import Check from "../check/Check";
import FillingsSelector from "../fillings-selector/FillingsSelector";
import CountAndPrice from "../count-and-price/CountAndPrice";
import stuffings from "../../data/Stuffings";
import toppings from "../../data/Toppings";

export default function OrderSelector({ hamburger }) {
    const [order, setOrder] = useState({
        hamburger: hamburger,
        count: MIN_COUNT,
    });

    console.log(order);

    const totalPrice = calculatePrice(order.hamburger) * order.count;

    const handleAddTopping = (topping) => {
        if (order.hamburger.toppings.length !== order.hamburger.size.maxTopping) {
            setOrder((prevState) => {
                prevState.hamburger.toppings.push(topping);
                return JSON.parse(JSON.stringify(prevState));
            });
        }
    };

    const handleRemoveTopping = (topping) => {
        setOrder((prevState) => {
            const toppings = prevState.hamburger.toppings.filter((t) => t !== topping);
            return {
                ...prevState,
                hamburger: {
                    ...prevState.hamburger,
                    toppings,
                },
            };
        });
    };

    const handleAddStuffing = (stuffing) => {
        setOrder((prevState) => {
            prevState.hamburger.stuffings.push(stuffing);
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleRemoveStuffing = (stuffing) => {
        setOrder((prevState) => {
            const stuffings = prevState.hamburger.stuffings.filter((s) => s !== stuffing);
            return {
                ...prevState,
                hamburger: {
                    ...prevState.hamburger,
                    stuffings,
                },
            };
        });
    };

    const handleCountChange = (newCount) => {
        console.log(newCount);
        // setOrder({ count: newCount });
        setOrder((prevState) => ({
            ...prevState,
            hamburger: {
                ...prevState.hamburger,
            },
            count: newCount,
        }));
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <Info hamburger={order.hamburger} />
                <Check order={order} totalPrice={totalPrice} />
            </div>
            <div className="d-flex justify-content-between">
                <FillingsSelector
                    selectedFillings={order.hamburger.toppings}
                    onAdd={handleAddTopping}
                    onRemove={handleRemoveTopping}
                    fillings={toppings}
                    title="Topping"
                />
                <FillingsSelector
                    selectedFillings={order.hamburger.stuffings}
                    onAdd={handleAddStuffing}
                    onRemove={handleRemoveStuffing}
                    fillings={stuffings}
                    title="Stuffing"
                />
            </div>
            <div className="border-bottom mb-4" />
            <CountAndPrice count={order.count} totalPrice={totalPrice} onCountChange={handleCountChange} />
        </>
    );
}
