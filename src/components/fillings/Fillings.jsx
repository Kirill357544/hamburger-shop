import formatPrice from "../../formatter/formatPrice";

export default function Fillings({ fillings }) {
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {fillings
                        .sort((prev, next) => next.price - prev.price)
                        .map((filling, index) => {
                            return (
                                <tr key={index}>
                                    <td>{filling.name}</td>
                                    <td>{filling.calories}</td>
                                    <td>{formatPrice(filling.price)}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
}
