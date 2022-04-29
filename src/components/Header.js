export default function Header(props) {
    return (
        <header className="mb-4 border">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <a className="navbar-brand" href="#home">
                            Hamburger Shop
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="#toppings">
                                    Toppings
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#stuffings">
                                    Stuffings
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav navbar-right">
                            <li className="nav-item">
                                <a className="me-3 nav-link" href="#history">
                                    Order History
                                </a>
                            </li>
                        </ul>
                        <div className="d-flex">{props.order()}</div>
                    </div>
                </div>
            </nav>
        </header>
    );
}
