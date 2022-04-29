export default function formatDate(formattedDate) {
    const date = new Date(formattedDate);
    const day = `${date.getDate()}`.padStart(2, "0");
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const hours = `${date.getHours()}`.padStart(2, "0");
    const minutes = `${date.getMinutes()}`.padStart(2, "0");
    return `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`;
}
