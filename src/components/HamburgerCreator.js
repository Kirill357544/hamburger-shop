import SizeSelector from "./sizeSelector/SizeSelector";
import Hamburger from "../Hamburger";
import { useState } from "react";

export default function HamburgerCreator() {
    const [size, setSize] = useState(null);

    return (
        <>
            <SizeSelector sizes={Hamburger.SIZES} />
        </>
    );
}
