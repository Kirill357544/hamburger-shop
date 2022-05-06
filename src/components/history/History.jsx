import { useState } from "react";
import OrderModal from "./OrderModal";
import formatDate from "../../formatter/formatDate";
import formatPrice from "../../formatter/formatPrice";

export default function History({ OrderStorage }) {
    const orders = OrderStorage.orders;
    const [orderModal, setOrderModal] = useState(null);

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date &amp; Time</th>
                        <th>Product</th>
                        <th>Count</th>
                        <th>Total</th>
                        <th>Order</th>
                    </tr>
                </thead>
                <tbody>
                    {orders
                        .sort((prev, next) => next.date - prev.date)
                        .map((order, index) => {
                            return (
                                <tr key={index}>
                                    <td>{formatDate(order.date)}</td>
                                    <td>{order.hamburger.size.name} Hamburger</td>
                                    <td>{order.count}</td>
                                    <td>{formatPrice(order.totalPrice)}</td>
                                    <td>
                                        <button
                                            className="btn btn-outline-secondary"
                                            onClick={() => setOrderModal(order)}
                                        >
                                            <i className="bi bi-list"></i>
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
            {orderModal !== null && <OrderModal order={orderModal} onClose={() => setOrderModal(null)} />}
        </>
    );
}
