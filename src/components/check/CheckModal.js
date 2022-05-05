import formatPrice from "../../formatter/formatPrice";
import calculatePrice from "../../calculatePrice";
import calculateCalories from "../../calculateCalories";
import OrderStorage from "../../OrderStorage";

export default function CheckModal({ hamburger, onClose }) {
    function handleBuyClick() {
        const order = {
            date: Date.now(),
            totalPrice: 0,
            count: 0,
            size: hamburger.size.name,
            toppings: hamburger.toppings,
            stuffings: hamburger.stuffings,
        };

        OrderStorage.add(order);
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
                            <div>Size</div>
                            <div>{hamburger.size.name}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Price</div>
                            <div>{formatPrice(calculatePrice(hamburger))}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Calories</div>
                            <div>{calculateCalories(hamburger)}</div>
                        </div>
                        {hamburger.toppings.map((filling) => (
                            <div className="d-flex justify-content-between" key={filling.name}>
                                <div>{filling.name}</div>
                                <div>{formatPrice(filling.price)}</div>
                            </div>
                        ))}
                        {hamburger.stuffings.map((filling) => (
                            <div className="d-flex justify-content-between" key={filling.name}>
                                <div>{filling.name}</div>
                                <div>{formatPrice(filling.price)}</div>
                            </div>
                        ))}
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-success" onClick={handleBuyClick}>
                            Buy
                        </button>
                        <button type="button" className="btn btn-danger" onClick={onClose}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
