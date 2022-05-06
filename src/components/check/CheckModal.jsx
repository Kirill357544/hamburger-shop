import { Link } from "react-router-dom";
import formatPrice from "../../formatter/formatPrice";
import calculatePrice from "../../calculate/calculatePrice";
import calculateCalories from "../../calculate/calculateCalories";
import OrderStorage from "../../OrderStorage";

export default function CheckModal({ order, onClose }) {
    function handleBuyClick() {
        OrderStorage.add({ date: Date.now(), ...JSON.parse(JSON.stringify(order)) });
        onClose();
    }

    return (
        <div className="modal bg-dark bg-opacity-75" style={{ display: "block" }}>
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Check</h5>
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
                            <div>{order.hamburger.size.name}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Price</div>
                            <div>{formatPrice(calculatePrice(order.hamburger))}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Calories</div>
                            <div>{calculateCalories(order.hamburger)}</div>
                        </div>
                        {order.hamburger.toppings.map((filling) => (
                            <div className="d-flex justify-content-between" key={filling.name}>
                                <div>{filling.name}</div>
                                <div>{formatPrice(filling.price)}</div>
                            </div>
                        ))}
                        {order.hamburger.stuffings.map((filling) => (
                            <div className="d-flex justify-content-between" key={filling.name}>
                                <div>{filling.name}</div>
                                <div>{formatPrice(filling.price)}</div>
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <Link
                            type="button"
                            className="btn btn-success"
                            onClick={handleBuyClick}
                            to="/history"
                        >
                            Buy
                        </Link>
                        <button type="button" className="btn btn-danger" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
