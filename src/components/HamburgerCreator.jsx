import SizeSelector from "./size-selector/SizeSelector";
import FillingsSelector from "./fillings-selector/FillingsSelector";
import Check from "./check/Check";
import Info from "./info/Info";
import { useState } from "react";
import SIZES from "../Sizes";
import TOPPINGS from "../Toppings";
import STUFFINGS from "../Stuffings";
import CountAndPrice from "./count-and-price/CountAndPrice";
import { MIN_COUNT } from "../Counts";
import calculatePrice from "../calculatePrice";

export default function HamburgerCreator() {
    const [order, setOrder] = useState(null);

    // let [hamburger, setHamburger] = useState(null);
    // let [countAndPrice, setCountAndPrice] = useState({
    //     count: MIN_COUNT,
    //     totalPrice: 4.5,
    // });

    const handleSizeSelect = (size) => {
        setOrder({ hamburger: { size, toppings: [], stuffings: [] }, count: MIN_COUNT, totalPrice: null });

        // setHamburger(() => ({ size, toppings: [], stuffings: [] }));
    };

    const handleAddTopping = (topping) => {
        if (hamburger.toppings.length !== hamburger.size.maxTopping) {
            setHamburger((prevState) => {
                prevState.toppings.push(topping);
                return JSON.parse(JSON.stringify(prevState));
            });
            setCountAndPrice((prevState) => {
                countAndPrice.totalPrice = calculatePrice(hamburger) * countAndPrice.count;
                return JSON.parse(JSON.stringify(prevState));
            });
        }
    };

    const handleRemoveTopping = (topping) => {
        setHamburger((prevState) => {
            const index = hamburger.toppings.indexOf(topping);
            hamburger.toppings.splice(index, 1);
            return JSON.parse(JSON.stringify(prevState));
        });
        setCountAndPrice((prevState) => {
            countAndPrice.totalPrice = calculatePrice(hamburger) * countAndPrice.count;
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleAddStuffing = (stuffing) => {
        setHamburger((prevState) => {
            prevState.stuffings.push(stuffing);
            return JSON.parse(JSON.stringify(prevState));
        });
        setCountAndPrice((prevState) => {
            countAndPrice.totalPrice = calculatePrice(hamburger) * countAndPrice.count;
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleRemoveStuffing = (stuffing) => {
        setHamburger((prevState) => {
            const index = hamburger.stuffings.indexOf(stuffing);
            hamburger.stuffings.splice(index, 1);
            return JSON.parse(JSON.stringify(prevState));
        });
        setCountAndPrice((prevState) => {
            countAndPrice.totalPrice = calculatePrice(hamburger) * countAndPrice.count;
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    return (
        <>
            {hamburger === null ? (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Select Size</h1>
                    <SizeSelector sizes={SIZES} onSelect={handleSizeSelect} />
                </>
            ) : (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Build up your favorite hamburger</h1>
                    <div className="d-flex justify-content-between">
                        <Info hamburger={hamburger} />
                        <Check hamburger={hamburger} countAndPrice={countAndPrice} />
                    </div>
                    <div className="d-flex justify-content-between">
                        <FillingsSelector
                            selectedFillings={hamburger.toppings}
                            onAdd={handleAddTopping}
                            onRemove={handleRemoveTopping}
                            fillings={TOPPINGS}
                            title="Topping"
                        />
                        <FillingsSelector
                            selectedFillings={hamburger.stuffings}
                            onAdd={handleAddStuffing}
                            onRemove={handleRemoveStuffing}
                            fillings={STUFFINGS}
                            title="Stuffing"
                        />
                    </div>
                    <div className="border-bottom mb-4" />
                    <CountAndPrice
                        hamburger={hamburger}
                        countAndPrice={countAndPrice}
                        setCountAndPrice={setCountAndPrice}
                    />
                </>
            )}
        </>
    );
}
