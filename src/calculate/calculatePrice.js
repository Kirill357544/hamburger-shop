import calculateSum from "./calculateSum";

export default function calculatePrice(hamburger) {
    const sumStuffingsPrice = calculateSum(hamburger.stuffings, "price");
    const sumToppingsPrice = calculateSum(hamburger.toppings, "price");
    return hamburger.size.price + sumStuffingsPrice + sumToppingsPrice;
}
