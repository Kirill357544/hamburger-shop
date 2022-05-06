import SizeSelector from "../size-selector/SizeSelector";
import { useState } from "react";
import SIZES from "../../Sizes";
import { MIN_COUNT } from "../../Counts";

import OrderSelector from "../order-selector/OrderSelector";

export default function OrderCreator() {
    const [order, setOrder] = useState(null);

    const handleSizeSelect = (size) => {
        setOrder({
            hamburger: { size, toppings: [], stuffings: [] },
            count: MIN_COUNT,
            totalPrice: size.price,
        });
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
                    <OrderSelector order={order} setOrder={setOrder} />
                </>
            )}
        </>
    );
}
