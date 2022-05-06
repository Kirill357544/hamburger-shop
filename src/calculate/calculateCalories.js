import calculateSum from "./calculateSum";

export default function calculateCalories(hamburger) {
    const sumStuffingsCalories = calculateSum(hamburger.stuffings, "calories");
    const sumToppingsCalories = calculateSum(hamburger.toppings, "calories");
    return hamburger.size.calories + sumStuffingsCalories + sumToppingsCalories;
}
