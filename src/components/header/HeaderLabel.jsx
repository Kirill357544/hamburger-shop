import { HamburgerContext } from "../../HamburgerConfiguration";
import { useContext } from "react";
import Price from "../Price/Price";
import { Link } from "react-router-dom";
import calculatePrice from "../../calculate/calculatePrice";

export default function HeaderLabel() {
    const [hamburgerContext] = useContext(HamburgerContext);

    return (
        <Link to={"/order"} className="btn btn-link link-secondary">
            <strong>Current Order</strong>: {hamburgerContext.size.name} (
            <Price price={calculatePrice(hamburgerContext)} /> x {hamburgerContext.count})
            <i className="bi bi-cart4 ms-2" />
        </Link>
    );
}
