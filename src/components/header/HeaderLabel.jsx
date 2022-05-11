export default function HeaderLabel() {
    return (
        <a
            href="#0"
            onClick={(event) => {
                event.preventDefault();
            }}
            className="btn btn-link link-secondary"
        >
            <strong>Current Order</strong>: Large ($26.73 x 1)
            <i className="bi bi-cart4 ms-2" />
        </a>
    );
}
