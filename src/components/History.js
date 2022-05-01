import OrderModal from "./OrderModal";
import formatDate from "../formatter/formatDate";
import formatPrice from "../formatter/formatPrice";
import { useState } from "react";

export default function History({ OrderStorage }) {
    const orders = OrderStorage.orders;

    let [orderModal, setOrderModal] = useState({
        date: "0",
        totalPrice: 0,
        count: 0,
        size: "",
    });

    function handleClick(event) {
        setOrderModal(OrderStorage.getOrder(1));
        let target = event.target;
        while (target !== event.currentTarget) {
            if (target.tagName === "BUTTON") {
                const orderId = target.dataset.order;
                setOrderModal(OrderStorage.getOrder(orderId));
                break;
            }
            target = target.parentElement;
        }
    }

    return (
        <>
            <h1 className="mb-3 pb-3 border-bottom">Order History</h1>
            <table className="table" onClick={(event) => handleClick(event)}>
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
                    {orders.map((order, index) => {
                        return (
                            <tr key={index}>
                                <td>{formatDate(order.date)}</td>
                                <td>{order.size} Hamburger</td>
                                <td>{order.count}</td>
                                <td>{formatPrice(order.totalPrice)}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-secondary"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        data-order={index}
                                    >
                                        <i className="bi bi-list"></i>
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* <OrderModal order={orderModal} /> */}
        </>
    );
}
