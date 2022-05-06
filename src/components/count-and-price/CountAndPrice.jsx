import { MIN_COUNT, MAX_COUNT } from "../../data/Counts";
import formatPrice from "../../formatter/formatPrice";

export default function CountAndPrice({ order, handleCountBlur }) {
    return (
        <div className="col-12">
            <form>
                <div className="d-flex justify-content-end mb-2">
                    <label className="fw-bold me-4" htmlFor="count">
                        Count:
                    </label>
                    <div className="col-1">
                        <input
                            type="number"
                            defaultValue={order.count}
                            min={MIN_COUNT}
                            max={MAX_COUNT}
                            onBlur={(event) => handleCountBlur(event)}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <label className="fw-bold me-4">Total:</label>
                    <div className="col-1">{formatPrice(order.totalPrice)}</div>
                </div>
            </form>
        </div>
    );
}
