import { Link } from "react-router-dom";

export default function HeaderButton() {
    return (
        <Link className="btn btn-success" to="order">
            <i className="me-2 bi bi-bag-plus" />
            New Order
        </Link>
    );
}
