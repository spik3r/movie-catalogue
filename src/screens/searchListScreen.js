import React, {Component} from "react";
import HeroBanner from "../components/heroBanner";
import MovieCards from "../components/movieCards";
import {connect} from "react-redux";
import BackButton from "../components/BackButton";

class SearchListScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return <div className="list-container">
            <HeroBanner/>
            <BackButton/>
            <h1 className="search-heading">Movies relating to search term: <i className="search-term">' {this.props.searchTerm} '</i></h1>
            <MovieCards movies={this.props.movies}/>
        </div>;
    }

}
const mapDispatchToProps = {
};


function mapStateToProps(state, props) {
    return {
        isLoading: state.moviesReducer.isLoading,
        movies: state.moviesReducer.searchMovies,
        searchTerm: state.moviesReducer.searchTerm,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListScreen);

