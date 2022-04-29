export default class Hamburger {
    #stuffings = [];
    #toppings = [];
    #size;

    constructor(size) {
        this.#size = size;
    }

    addStuffing(stuffing) {
        if (this.#stuffings.length < this.#size.maxTopping && !this.#stuffings.includes(stuffing)) {
            this.#stuffings.push(stuffing);
        }
    }

    addTopping(topping) {
        if (!this.#toppings.includes(topping)) {
            this.#toppings.push(topping);
        }
    }

    removeStuffing(stuffing) {
        const index = this.#stuffings.indexOf(stuffing);

        if (index !== -1) {
            this.#stuffings.splice(index, 1);
        }
    }

    removeTopping(topping) {
        const index = this.#toppings.indexOf(topping);

        if (index !== -1) {
            this.#toppings.splice(index, 1);
        }
    }

    get size() {
        return this.#size;
    }

    get stuffings() {
        return this.#stuffings.slice();
    }

    get toppings() {
        return this.#toppings.slice();
    }

    calculateCalories() {
        const sumStuffingsCalories = this.#calculateSum(this.#stuffings, "calories");
        const sumToppingsCalories = this.#calculateSum(this.#toppings, "calories");
        return this.#size.calories + sumStuffingsCalories + sumToppingsCalories;
    }

    calculatePrice() {
        const sumStuffingsPrice = this.#calculateSum(this.#stuffings, "price");
        const sumToppingsPrice = this.#calculateSum(this.#toppings, "price");
        return this.#size.price + sumStuffingsPrice + sumToppingsPrice;
    }

    #calculateSum(arr, prop) {
        return arr.reduce((sum, element) => sum + element[prop], 0);
    }
}

Hamburger.SIZE_SMALL = {
    name: "Small",
    price: 2.5,
    calories: 230,
    maxTopping: 5,
};
Hamburger.SIZE_LARGE = {
    name: "Large",
    price: 4.5,
    calories: 500,
    maxTopping: 10,
};
Hamburger.SIZES = [Hamburger.SIZE_SMALL, Hamburger.SIZE_LARGE];
Hamburger.STUFFING_CHEESE = {
    name: "Cheese",
    price: 0.8,
    calories: 60,
};
Hamburger.STUFFING_SALAD = {
    name: "Salad",
    price: 0.4,
    calories: 20,
};
Hamburger.STUFFING_POTATO = {
    name: "Potato",
    price: 0.6,
    calories: 80,
};
Hamburger.STUFFING_BACON = {
    name: "Bacon",
    price: 1.6,
    calories: 150,
};
Hamburger.STUFFING_CARROT = {
    name: "Carrot",
    price: 0.4,
    calories: 40,
};
Hamburger.STUFFING_TOMATO = {
    name: "Tomato",
    price: 0.6,
    calories: 60,
};
Hamburger.STUFFINGS = [
    Hamburger.STUFFING_TOMATO,
    Hamburger.STUFFING_CARROT,
    Hamburger.STUFFING_BACON,
    Hamburger.STUFFING_POTATO,
    Hamburger.STUFFING_SALAD,
    Hamburger.STUFFING_CHEESE,
];
Hamburger.TOPPING_MAYO = {
    name: "Mayo",
    price: 0.4,
    calories: 40,
};
Hamburger.TOPPING_SPICE = {
    name: "Spice",
    price: 0.2,
    calories: 40,
};
Hamburger.TOPPINGS = [Hamburger.TOPPING_SPICE, Hamburger.TOPPING_MAYO];
