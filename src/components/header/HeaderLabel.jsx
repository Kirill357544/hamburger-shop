import { Link } from "react-router-dom";
import { useContext } from "react";

import { HamburgerContext } from "../../HamburgerConfiguration";
import Price from "../Price/Price";

export default function HeaderLabel() {
    const [hamburgerContext] = useContext(HamburgerContext);

    return (
        <Link to={"/order"} className="btn btn-link link-secondary">
            <strong>Current Order</strong>: {hamburgerContext.size.name} (
            <Price price={hamburgerContext.price} /> x {hamburgerContext.count})
            <i className="bi bi-cart4 ms-2" />
        </Link>
    );
}
