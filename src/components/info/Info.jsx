import Price from "../Price/Price";
import calculatePrice from "../../calculate/calculatePrice";
import calculateCalories from "../../calculate/calculateCalories";

export default function Info({ hamburger }) {
    return (
        <div className="col-4 mb-5">
            <dl className="container border-bottom">
                <div className="row">
                    <dt className="col text-end">Size</dt>
                    <dd className="col">{hamburger.size.name}</dd>
                </div>
                <div className="row">
                    <dt className="col text-end">Toppings</dt>
                    <dd className="col">{hamburger.toppings.length}</dd>
                </div>
                <div className="row">
                    <dt className="col text-end">Stuffings</dt>
                    <dd className="col">{hamburger.stuffings.length}</dd>
                </div>
                <div className="row">
                    <dt className="col text-end">Calories</dt>
                    <dd className="col">{calculateCalories(hamburger)}</dd>
                </div>
            </dl>
            <dl className="container">
                <div className="row">
                    <dt className="col text-end">Price</dt>
                    <dd className="col">
                        <Price price={calculatePrice(hamburger)} />
                    </dd>
                </div>
            </dl>
        </div>
    );
}
