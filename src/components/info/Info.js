import formatPrice from "../../formatter/formatPrice";

export default function Info({ hamburger }) {
    return (
        <div className="col-4 mb-4">
            <dl className="border-bottom">
                <div>
                    <dt>Size</dt>
                    <dd>{hamburger.size.name}</dd>
                </div>
                <div>
                    <dt>Toppings</dt>
                    <dd>{hamburger.toppings.length}</dd>
                </div>
                <div>
                    <dt>Stuffings</dt>
                    <dd>{hamburger.stuffings.length}</dd>
                </div>
                <div>
                    <dt>Calories</dt>
                    <dd>{hamburger.calculateCalories()}</dd>
                </div>
            </dl>
            <dl className="dl-horizontal">
                <div>
                    <dt>Price</dt>
                    <dd>{formatPrice(hamburger.calculatePrice())}</dd>
                </div>
            </dl>
        </div>
    );
}
