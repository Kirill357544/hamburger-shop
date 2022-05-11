import { useContext } from "react";

import { HamburgerContext } from "../../HamburgerContext";
import sizes from "../../data/Sizes";
import SizeSelector from "../size-selector/SizeSelector";
import OrderSelector from "../order-selector/OrderSelector";

export default function OrderCreator() {
    const { hamburger, setHamburger } = useContext(HamburgerContext);

    const handleSizeSelect = (size) => {
        setHamburger((prevState) => ({
            ...prevState,
            size,
            price: size.price,
            calories: size.calories,
        }));
    };

    return (
        <>
            {hamburger.size === null ? (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Select Size</h1>
                    <SizeSelector sizes={sizes} onSelect={handleSizeSelect} />
                </>
            ) : (
                <>
                    <h1 className="mb-3 pb-3 border-bottom">Build up your favorite hamburger</h1>
                    <OrderSelector />
                </>
            )}
        </>
    );
}
