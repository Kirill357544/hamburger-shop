import Price from "../Price/Price";

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
                    {fillings.map((filling, index) => (
                        <tr key={index}>
                            <td>{filling.name}</td>
                            <td>{filling.calories}</td>
                            <td><Price price={filling.price} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}
