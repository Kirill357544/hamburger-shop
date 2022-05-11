import { HamburgerContext } from "../../HamburgerConfiguration";
import { useContext } from "react";
import Price from "../Price/Price";

export default function HeaderLabel() {
    const [hamburgerContext] = useContext(HamburgerContext);

    return (
        <a
            href="#0"
            onClick={(event) => {
                event.preventDefault();
            }}
            className="btn btn-link link-secondary"
        >
            <strong>Current Order</strong>: {hamburgerContext.size.name} (
            <Price price={hamburgerContext.size.price} /> x 1)
            <i className="bi bi-cart4 ms-2" />
        </a>
    );
}
