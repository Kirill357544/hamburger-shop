import React from "react";

import { MIN_COUNT } from "./data/Counts";
import calculatePrice from "./calculate/calculatePrice";

export const HamburgerContext = React.createContext({
    hamburger: {
        size: null,
        toppings: [],
        stuffings: [],
        count: MIN_COUNT,
        price: null,
        calories: null,
        addTopping(topping) {
            if (this.toppings.length !== this.size.maxTopping) {
                this.toppings.push(topping);
                const price = calculatePrice(this);
                return {
                    ...this,
                    price,
                };
            }
        },
        removeTopping(topping) {
            const toppings = this.toppings.filter((t) => t !== topping);
            return {
                ...this,
                toppings,
                price: this.price - topping.price,
            };
        },
        addStuffing(stuffing) {
            this.stuffings.push(stuffing);
            const price = calculatePrice(this);
            return {
                ...this,
                price,
            };
        },
        removeStuffing(stuffing) {
            const stuffings = this.stuffings.filter((s) => s !== stuffing);
            return {
                ...this,
                stuffings,
                price: this.price - stuffing.price,
            };
        },
        updateCount(count) {
            return {
                ...this,
                count,
            };
        },
    },
    setHamburger() {},
});
