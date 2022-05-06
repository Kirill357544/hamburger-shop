import { MIN_COUNT, MAX_COUNT } from "../../Counts";
import calculatePrice from "../../calculatePrice";
import formatPrice from "../../formatter/formatPrice";

export default function CountAndPrice({ hamburger, countAndPrice, setCountAndPrice }) {
    function handleCountBlur(event) {
        let currentValue = event.target.valueAsNumber;

        if (currentValue !== countAndPrice.count) {
            if (currentValue > MAX_COUNT) {
                currentValue = MAX_COUNT;
                event.target.value = currentValue;
            } else if (currentValue < MIN_COUNT) {
                currentValue = MIN_COUNT;
                event.target.value = currentValue;
            }
            setCountAndPrice((prevState) => {
                countAndPrice.count = currentValue;
                countAndPrice.totalPrice = calculatePrice(hamburger) * countAndPrice.count;
                return JSON.parse(JSON.stringify(prevState));
            });
        }
    }

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
                            defaultValue={countAndPrice.count}
                            min={MIN_COUNT}
                            max={MAX_COUNT}
                            onBlur={handleCountBlur}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <label className="fw-bold me-4">Total:</label>
                    <div className="col-1">{formatPrice(countAndPrice.totalPrice)}</div>
                </div>
            </form>
        </div>
    );
}
