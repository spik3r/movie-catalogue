import React, {Component} from "react";
import HeroBanner from "../components/heroBanner";
import MovieCards from "../components/movieCards";
import {connect} from "react-redux";
import BackButton from "../components/BackButton";
import {goHome} from "../util/navigation";

class SearchListScreen extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        // {this.props.movies || goHome()}
        return <div className="list-container">
            <HeroBanner/>
            <BackButton/>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchListScreen);

