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
    const [hamburgerContext, setHamburgerContext] = useContext(HamburgerContext);

    const totalPrice = calculatePrice(hamburgerContext) * hamburgerContext.count;

    const handleAddTopping = (topping) => {
        if (hamburgerContext.toppings.length !== hamburgerContext.size.maxTopping) {
            setHamburgerContext((prevState) => {
                prevState.toppings.push(topping);
                prevState.price = calculatePrice(prevState);
                return JSON.parse(JSON.stringify(prevState));
            });
        }
    };

    const handleRemoveTopping = (topping) => {
        setHamburgerContext((prevState) => {
            const toppings = prevState.toppings.filter((t) => t !== topping);
            return {
                ...prevState,
                toppings,
                price: prevState.price - topping.price,
            };
        });
    };

    const handleAddStuffing = (stuffing) => {
        setHamburgerContext((prevState) => {
            prevState.stuffings.push(stuffing);
            prevState.price = calculatePrice(prevState);
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleRemoveStuffing = (stuffing) => {
        setHamburgerContext((prevState) => {
            const stuffings = prevState.stuffings.filter((s) => s !== stuffing);
            return {
                ...prevState,
                stuffings,
                price: prevState.price - stuffing.price,
            };
        });
    };

    const handleCountChange = (newCount) => {
        // setOrder({ count: newCount });
        setHamburgerContext((prevState) => ({
            ...prevState,
            count: newCount,
        }));
    };

    return (
        <>
            <div className="d-flex justify-content-between">
                <Info hamburger={hamburgerContext} />
                <Check totalPrice={totalPrice} />
            </div>
            <div className="d-flex justify-content-between">
                <FillingsSelector
                    selectedFillings={hamburgerContext.toppings}
                    onAdd={handleAddTopping}
                    onRemove={handleRemoveTopping}
                    fillings={toppings}
                    title="Topping"
                />
                <FillingsSelector
                    selectedFillings={hamburgerContext.stuffings}
                    onAdd={handleAddStuffing}
                    onRemove={handleRemoveStuffing}
                    fillings={stuffings}
                    title="Stuffing"
                />
            </div>
            <div className="border-bottom mb-4" />
            <CountAndPrice
                count={hamburgerContext.count}
                totalPrice={totalPrice}
                onCountChange={handleCountChange}
            />
        </>
    );
}
