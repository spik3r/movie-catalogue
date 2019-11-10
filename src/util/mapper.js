import moment from "moment";

export function toPercentage(rating) {
    return JSON.stringify(parseFloat(rating) * 10) + "%";
}

export function toDisplayDate(date) {
    return moment(date).format("MMMM YYYY");
}

export function toDisplayYear(date) {
    return moment(date).format("YYYY");
}

export function toDisplayTime(time) {
    const hours = Math.floor(time / 60);
    const minutes = (time % 60);
    return `${hours}h ${minutes} min`;
}

export const getId = (path) => {
    return path.split(":")[1];
};
