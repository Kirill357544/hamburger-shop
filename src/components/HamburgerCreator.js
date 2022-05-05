import SizeSelector from "./sizeSelector/SizeSelector";
import FillingsSelector from "./fillingsSelector/FillingsSelector";
import Info from "./info/Info";
import { useState } from "react";
import SIZES from "../Sizes";
import TOPPINGS from "../Toppings";
import STUFFINGS from "../Stuffings";

export default function HamburgerCreator() {
    let [hamburger, setHamburger] = useState(null);

    const handleSizeSelect = (size) => {
        setHamburger({ size, toppings: [], stuffings: [] });
    };

    const handleAddTopping = (topping) => {
        setHamburger((prevState) => {
            prevState.toppings.push(topping);
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleRemoveTopping = (topping) => {
        setHamburger((prevState) => {
            const index = hamburger.toppings.indexOf(topping);
            hamburger.toppings.splice(index, 1);
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleAddStuffing = (stuffing) => {
        setHamburger((prevState) => {
            prevState.stuffings.push(stuffing);
            return JSON.parse(JSON.stringify(prevState));
        });
    };

    const handleRemoveStuffing = (stuffing) => {
        setHamburger((prevState) => {
            const index = hamburger.stuffings.indexOf(stuffing);
            hamburger.stuffings.splice(index, 1);
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
                    <Info hamburger={hamburger} />
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
                </>
            )}
        </>
    );
}
