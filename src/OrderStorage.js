class OrderStorage {
    #orderCache = [];

    constructor() {
        const orders = JSON.parse(localStorage.getItem("orders"));
        if (Array.isArray(orders)) {
            this.#orderCache = orders;
        }
    }

    add(order) {
        this.#orderCache.push(order);
        localStorage.setItem("orders", JSON.stringify(this.#orderCache));
    }

    get orders() {
        return this.#orderCache;
    }

    getOrder(id) {
        return this.#orderCache[id];
    }
}

export default new OrderStorage();
