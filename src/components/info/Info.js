export default function Info({ hamburger: { size, toppings, stuffings, calories, price } }) {
    return (
        <div className="col-4">
            <dl className="border-bottom">
                <dt>Size</dt>
                <dd>Large</dd>
                <dt>Toppings</dt>
                <dd>1</dd>
                <dt>Stuffings</dt>
                <dd>2</dd>
                <dt>Calories</dt>
                <dd>270</dd>
            </dl>
            <dl className="dl-horizontal">
                <dt>Price</dt>
                <dd>$26.73</dd>
            </dl>
        </div>
    );
}
