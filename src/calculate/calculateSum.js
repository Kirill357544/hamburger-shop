export default function calculateSum(arr, prop) {
    return arr.reduce((sum, element) => sum + element[prop], 0);
}
