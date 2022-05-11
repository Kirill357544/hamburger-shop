import { useState, useContext } from "react";
import { HamburgerContext } from "../../HamburgerConfiguration";
import sizes from "../../data/Sizes";
import SizeSelector from "../size-selector/SizeSelector";
import OrderSelector from "../order-selector/OrderSelector";

export default function OrderCreator() {
    const [hamburger, setHamburger] = useState(null);
    const [hamburgerContext, setHamburgerContext] = useContext(HamburgerContext);

    const handleSizeSelect = (size) => {
        setHamburgerContext((prevState) => ({ ...prevState, size }));

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
                    <SizeSelector sizes={sizes} onSelect={handleSizeSelect} />
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
