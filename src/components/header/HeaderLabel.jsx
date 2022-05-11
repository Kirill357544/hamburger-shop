import { HamburgerContext } from "../../HamburgerConfiguration";
import { useContext } from "react";

export default function HeaderLabel() {
    const [hamburgerContext, setHamburgerContext] = useContext(HamburgerContext);
    console.log(hamburgerContext);

    return (
        <a
            href="#0"
            onClick={(event) => {
                event.preventDefault();
            }}
            className="btn btn-link link-secondary"
        >
            <strong>Current Order</strong>: {hamburgerContext.size.name} ($26.73 x 1)
            <i className="bi bi-cart4 ms-2" />
        </a>
    );
}
