import formatPrice from "../../formatter/formatPrice";
import calculatePrice from "../../calculatePrice";
import calculateCalories from "../../calculateCalories";

export default function Info({ hamburger }) {
    return (
        <div className="col-4 mb-5">
            <dl className="border-bottom">
                <div className="d-flex justify-content-evenly">
                    <dt>Size</dt>
                    <dd>{hamburger.size.name}</dd>
                </div>
                <div className="d-flex justify-content-evenly">
                    <dt>Toppings</dt>
                    <dd>{hamburger.toppings.length}</dd>
                </div>
                <div className="d-flex justify-content-evenly">
                    <dt>Stuffings</dt>
                    <dd>{hamburger.stuffings.length}</dd>
                </div>
                <div className="d-flex justify-content-evenly">
                    <dt>Calories</dt>
                    <dd>{calculateCalories(hamburger)}</dd>
                </div>
            </dl>
            <dl className="dl-horizontal">
                <div className="d-flex justify-content-evenly">
                    <dt>Price</dt>
                    <dd>{formatPrice(calculatePrice(hamburger))}</dd>
                </div>
            </dl>
        </div>
    );
}
