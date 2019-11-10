import React from 'react';
import {connect} from "react-redux";
import MovieCard from "./movieCard";
import {loadMoviesRequest} from "../redux/actions/actions"
import Modal from "./Modal";
import {config} from "../api/defaultConfig";
import {toDisplayDate, toPercentage} from "../util/mapper";
import navTo from "../util/navigation";

class MovieCards extends React.Component {
    constructor(props) {
        super(props);

        !this.props.movies && this.props.loadMoviesRequest();
    }

    navToDetails(movieId) {
        navTo(`details:${movieId}`);
    }

    componentDidUpdate(prevProps) {
        if (this.props.showDetails) {
            this.navToDetails(this.props.id);
        }
    }

    render() {
        return <ul className="card-container">
            <Modal className="modal" show={this.props.isLoading}/>

            { this.props.movies && this.props.movies.map((movie) => {
                const {id, fullPath, releaseDate, title, rating} = this.getMovieDetails(movie);

                return <MovieCard key={id} id={id} fullPath={fullPath} releaseDate={releaseDate} title={title} rating={rating}/>
            })}
        </ul>;
    }

    getMovieDetails(movie) {
        const id = movie.id;
        const imgBase = config.mobile_card_base;
        const imgPath = movie.poster_path;
        const fullPath = imgBase + imgPath;
        const releaseDate = toDisplayDate(movie.release_date);
        const title = movie.title;
        const rating = toPercentage(movie.vote_average);
        return {id, fullPath, releaseDate, title, rating};
    }
};

const mapDispatchToProps = {
    loadMoviesRequest
};


function mapStateToProps(state, props) {
    return {
        isLoading: state.moviesReducer.isLoading,
        id: state.moviesReducer.id,
        showDetails: state.moviesReducer.showDetails,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCards);