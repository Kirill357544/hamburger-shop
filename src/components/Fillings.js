import formatPrice from "../formatter/formatPrice";

export default function Fillings({ title, fillings }) {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">{title}</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {fillings.map((filling, index) => {
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
