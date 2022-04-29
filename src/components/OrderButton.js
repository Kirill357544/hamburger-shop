import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom";

export default function OrderButton() {
    return (
        <Link className="btn btn-success" to="order">
            <i className="me-2 bi bi-bag-plus"></i>
            New Order
        </Link>
    );
}
