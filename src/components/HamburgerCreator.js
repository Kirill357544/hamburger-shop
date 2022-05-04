import SizeSelector from "./sizeSelector/SizeSelector";
import FillingsSelector from "./fillingsSelector/FillingsSelector";
import Info from "./info/Info";
import Hamburger from "../Hamburger";
import { useState } from "react";

export default function HamburgerCreator() {
    const [hamburger, setHamburger] = useState(null);

    const handleSizeSelect = (size) => {
        setHamburger(new Hamburger(size));
    };

    const handleToppingSelect = (topping) => {
        hamburger.addTopping(topping);
        setHamburger(hamburger);
    };

    return (
        <>
            {hamburger === null ? (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Select Size</h1>
                    <SizeSelector sizes={Hamburger.SIZES} onSelect={handleSizeSelect} />
                </>
            ) : (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Build up your favorite hamburger</h1>
                    <Info hamburger={hamburger} />
                    <div className="d-flex justify-content-between">
                        <FillingsSelector
                            onAdd={handleToppingSelect}
                            fillings={Hamburger.TOPPINGS}
                            title="Toppings"
                        />
                    </div>
                </>
            )}
        </>
    );
}
