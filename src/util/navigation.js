import history from "./history";

export default function navTo(loc) {
    history.push(loc);
}

export function goBack() {
    history.goBack();
}