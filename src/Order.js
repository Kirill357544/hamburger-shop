export class Order {
    #totalPrice;
    #hamburger;
    #count;
    #date;

    constructor(hamburger, count, totalPrice) {
        this.#totalPrice = totalPrice;
        this.#hamburger = hamburger;
        this.#date = new Date();
        this.#count = count;
    }

    get info() {
        return {
            date: this.#date,
            totalPrice: this.#totalPrice,
            size: this.#hamburger.size.name,
            count: this.#count,
            price: this.#hamburger.calculatePrice(),
            toppings: this.#hamburger.toppings,
            stuffings: this.#hamburger.stuffings,
        };
    }
}
