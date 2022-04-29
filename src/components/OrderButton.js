import "bootstrap-icons/font/bootstrap-icons.css";

export default function OrderButton() {
    return (
        <a href="#order" className="btn btn-success">
            <i className="me-2 bi bi-bag-plus"></i>
            New Order
        </a>
    );
}
