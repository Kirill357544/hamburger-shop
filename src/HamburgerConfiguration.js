import React from "react";
import { MIN_COUNT } from "./data/Counts";

export const HamburgerContext = React.createContext({
    size: null,
    toppings: [],
    stuffings: [],
    count: MIN_COUNT,
});
