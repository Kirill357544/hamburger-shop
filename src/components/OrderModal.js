import formatDate from "../formatter/formatDate";
import formatPrice from "../formatter/formatPrice";

export default function OrderModal({ order }) {
    return (
        <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Order {formatDate(order.date)}
                        </h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" />
                    </div>
                    <div className="modal-body">
                        <div className="d-flex justify-content-between">
                            <div>Total price</div>
                            <div>{formatPrice(order.totalPrice)}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Count</div>
                            <div>{order.count}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Size</div>
                            <div>{order.size}</div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
