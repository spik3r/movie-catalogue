import React, {Component} from 'react';
import {currentPath, goBack} from "../util/navigation";
import {config} from "../api/defaultConfig";
import {toDisplayTime, toPercentage, toDisplayYear} from "../util/mapper";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class DetailsComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log("details", this.props.details);
        const imgBase = config.mobile_card_base;
        const imgPath = this.props.details.poster_path;
        const fullPath = imgBase + imgPath;

        const backdropBase = config.mobile_backdrop_base;
        const backdropPath = this.props.details.backdrop_path;
        const bgImgPath = backdropBase + backdropPath;

        const rating = toPercentage(this.props.details.vote_average);
        const movieDuration = this.props.details.runtime;

        // console.log('location', this.props.location);
        // const movieId = getId(this.props.location.pathname);
        // const theMovie = getMovie(this.props.movies, movieId);

        const releaseDate = toDisplayYear(this.props.details.release_date);

        return <div className="details-container">
            <>
                <i className="fa fa-arrow-left back-arrow" onClick={goBack}></i>
                <img src={bgImgPath} alt="Joker" className="details-image"/>
            </>
            <div className="details-content">
                <div className="details-top">
                    <img src={fullPath} alt="Joker" className="details-card-image details-top-left"/>
                    <div className="details-top-spacer"></div>
                    <div className="details-top-right">
                        <h1 className="details-title">{this.props.details.title}</h1>
                        <section className="details-summary">
                            <p className="details-release-date-score">
                                {releaseDate} - {rating} User Score
                            </p>
                            <p className="details-duration">
                                {toDisplayTime(movieDuration)}
                            </p>
                        </section>
                    </div>
                </div>

                <hr className="details-hr"/>
                <div className="details-bottom">
                    <h2>Overview</h2>
                    <section className="movie-description">
                        {this.props.details.overview}
                    </section>
                </div>

            </div>
        </div>;
    }

}

const mapDispatchToProps = {
};


function mapStateToProps(state, props) {
    return {
        isLoading: state.moviesReducer.isLoading,
        details: state.moviesReducer.details,
        id: state.moviesReducer.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailsComponent));
