import { Link } from "react-router-dom";
import { useContext } from "react";

import { HamburgerContext } from "../../HamburgerContext";
import Price from "../Price/Price";

export default function HeaderLabel() {
    const { hamburger } = useContext(HamburgerContext);

    return (
        <Link to={"/order"} className="btn btn-link link-secondary">
            <strong>Current Order</strong>: {hamburger.size.name} (
            <Price price={hamburger.price} /> x {hamburger.count})
            <i className="bi bi-cart4 ms-2" />
        </Link>
    );
}
