function converToUSD(price) {
    return `$${price.toFixed(2)}`;
}

function converToEUR(price) {
    return `€${(price * 0.9).toFixed(2)}`;
}

function converToRUB(price) {
    return `₽${(price * 100).toFixed(2)}`;
}

export default converToUSD;
