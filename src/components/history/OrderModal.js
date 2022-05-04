import formatDate from "../../formatter/formatDate";
import formatPrice from "../../formatter/formatPrice";

export default function OrderModal({ order, onClose }) {
    return (
        <div className="modal bg-dark bg-opacity-75" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Order {formatDate(order.date)}</h5>
                        <button type="button" className="btn-close" onClick={onClose} />
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
                        <button type="button" className="btn btn-danger" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
