import { useContext } from "react";
import { Link } from "react-router-dom";

import Price from "../Price/Price";
import OrderStorage from "../../OrderStorage";
import { HamburgerContext } from "../../HamburgerConfiguration";

export default function CheckModal({ totalPrice, onClose }) {
    const { hamburger, setHamburger } = useContext(HamburgerContext);

    function handleBuyClick() {
        OrderStorage.add({ date: Date.now(), ...hamburger, totalPrice });
        setHamburger({
            size: null,
            toppings: [],
            stuffings: [],
            count: 1,
            price: null,
            calories: null,
        });
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
                            <div>
                                <Price price={totalPrice} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Count</div>
                            <div>{hamburger.count}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Size</div>
                            <div>{hamburger.size.name}</div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Price</div>
                            <div>
                                <Price price={hamburger.price} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div>Calories</div>
                            <div>{hamburger.calories}</div>
                        </div>
                        {hamburger.toppings.map((filling) => (
                            <div className="d-flex justify-content-between" key={filling.name}>
                                <div>{filling.name}</div>
                                <div>
                                    <Price price={filling.price} />
                                </div>
                            </div>
                        ))}
                        {hamburger.stuffings.map((filling) => (
                            <div className="d-flex justify-content-between" key={filling.name}>
                                <div>{filling.name}</div>
                                <div>
                                    <Price price={filling.price} />
                                </div>
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
