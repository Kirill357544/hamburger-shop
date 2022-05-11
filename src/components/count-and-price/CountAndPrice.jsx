import { MIN_COUNT, MAX_COUNT } from "../../data/Counts";
import Price from "../Price/Price";

export default function CountAndPrice({ count, totalPrice, onCountChange }) {
    function handleCountChange(event) {
        let newCount = event.target.valueAsNumber;

        if (newCount !== count) {
            if (newCount > MAX_COUNT) {
                event.target.value = MAX_COUNT;
                newCount = MAX_COUNT;
            } else if (newCount < MIN_COUNT) {
                event.target.value = MIN_COUNT;
                newCount = MIN_COUNT;
            }
            onCountChange(newCount);
        }
    }

    return (
        <div className="col-12">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                }}
            >
                <div className="d-flex justify-content-end mb-2">
                    <label className="fw-bold me-4" htmlFor="count">
                        Count:
                    </label>
                    <div className="col-1">
                        <input
                            className="form-control"
                            type="number"
                            defaultValue={count}
                            min={MIN_COUNT}
                            max={MAX_COUNT}
                            onBlur={(event) => handleCountChange(event)}
                        />
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <label className="fw-bold me-4">Total:</label>
                    <div className="col-1">
                        <Price price={totalPrice} />
                    </div>
                </div>
            </form>
        </div>
    );
}
