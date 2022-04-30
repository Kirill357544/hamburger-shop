export default function History() {
    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Order History</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date & Time</th>
                        <th>Product</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </>
    );
}
