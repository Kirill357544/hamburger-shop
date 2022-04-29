import { Link, Outlet } from "react-router-dom";

export default function Header(props) {
    return (
        <>
            <header className="mb-4 border">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <div className="collapse navbar-collapse">
                            <Link className="navbar-brand" to="/">
                                Hamburger Shop
                            </Link>
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="toppings">
                                        Toppings
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="stuffings">
                                        Stuffings
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav navbar-right">
                                <li className="nav-item">
                                    <Link className="me-3 nav-link" to="history">
                                        Order History
                                    </Link>
                                </li>
                            </ul>
                            <div className="d-flex">{props.order()}</div>
                        </div>
                    </div>
                </nav>
            </header>
            <Outlet />
        </>
    );
}
