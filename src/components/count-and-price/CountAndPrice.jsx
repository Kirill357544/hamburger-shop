import { MIN_COUNT, MAX_COUNT } from "../../data/Counts";
import Price from "../Price/Price";

export default function CountAndPrice({ count, totalPrice, onCountChange }) {
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
                            onBlur={(event) => onCountChange(event.target.valueAsNumber)}
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
