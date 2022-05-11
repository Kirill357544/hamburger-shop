import { Link, NavLink } from "react-router-dom";
import HeaderButton from "./HeaderButton";
import HeaderLabel from "./HeaderLabel";

export default function Header() {
    return (
        <>
            <header className="mb-4 border sticky-top">
                <nav className="navbar navbar-expand-lg navbar-light bg-light p-0">
                    <div className="container">
                        <div className="collapse navbar-collapse">
                            <Link className="navbar-brand" to="/">
                                Hamburger Shop
                            </Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link py-3 px-2" to="toppings">
                                        Toppings
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link py-3 px-2" to="stuffings">
                                        Stuffings
                                    </NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-right">
                                <li className="nav-item">
                                    <NavLink className="me-3 nav-link py-3 px-2" to="history">
                                        Order History
                                    </NavLink>
                                </li>
                            </ul>
                            <div className="d-flex">{true ? <HeaderButton /> : <HeaderLabel />}</div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
