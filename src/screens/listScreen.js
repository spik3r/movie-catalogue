import React, {Component} from "react";
import HeroBanner from "../components/heroBanner";
import SearchBar from "../components/searchBar";
import MovieCards from "../components/movieCards";
import {connect} from "react-redux";

class ListScreen extends Component {

    render() {
        return <div className="list-container">
            <HeroBanner/>
            <SearchBar/>
            <MovieCards movies={this.props.movies}/>
        </div>;
    }

}

const mapDispatchToProps = {};

function mapStateToProps(state, props) {
    return {
        isLoading: state.moviesReducer.isLoading,
        movies: state.moviesReducer.movies,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListScreen);