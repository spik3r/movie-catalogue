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

export function  toDisplayTime(time) {
        const hours = Math.floor(time / 60);
        const minutes = (time % 60);
        return `${hours}h ${minutes} min`;
}

export const getId = (path)  => {
    console.log("path:", path);
    return path.split(":")[1];
};

export const getMovie = (movies, movieId) => {
    console.log('movies size', movies);
    console.log('movieId', movieId);
    console.log('______');

    return movies.reduce((movie) => {
        console.log("movie:", movie.id);
        console.log("movieId:", movieId);
        if (movie.id == movieId) {
            return movie;
        }
    });
};