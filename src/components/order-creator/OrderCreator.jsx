import { useState } from "react";
import SIZES from "../../data/Sizes";
import SizeSelector from "../size-selector/SizeSelector";
import OrderSelector from "../order-selector/OrderSelector";

export default function OrderCreator() {
    const [hamburger, setHamburger] = useState(null);

    const handleSizeSelect = (size) => {
        setHamburger({
            size,
            toppings: [],
            stuffings: [],
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
                    <OrderSelector hamburger={hamburger} />
                </>
            )}
        </>
    );
}
