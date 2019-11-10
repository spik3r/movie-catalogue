import React, {Component} from 'react';
import {config} from "../api/defaultConfig";
import {toDisplayTime, toDisplayYear, toPercentage} from "../util/mapper";
import BackButton from "./BackButton";

class DetailsComponent extends Component {

    render() {
        const {details} = this.props;

        const {fullPath, bgImgPath, rating, movieDuration, releaseDate} = this.prepareDetails(details);

        return <div className="details-container">
            <>
                <BackButton/>
                <img src={bgImgPath} alt={details.title} ref={bg => this.bg = bg} onError={() => {
                    this.bg.src = require('../assets/bg-not-found.png')
                }} className="details-image"/>
            </>
            <div className="details-content">
                <div className="details-top">
                    <img src={fullPath} alt={details.title} ref={img => this.img = img} onError={() => {
                        this.img.src = require('../assets/fallback-image.png')
                    }} className="details-card-image details-top-left"/>
                    <div className="details-top-spacer"></div>
                    <div className="details-top-right">
                        <h1 className="details-title">{details.title}</h1>
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
                        {details.overview || "Oops it looks like we're missing the description for this one :("}
                    </section>
                </div>

            </div>
        </div>;
    }

    prepareDetails(details) {
        try {
            const imgBase = config.mobile_card_base;
            const imgPath = details.poster_path;
            const fullPath = imgBase + imgPath;

            const backdropBase = config.mobile_backdrop_base;
            const backdropPath = details.backdrop_path;
            const bgImgPath = backdropBase + backdropPath;

            const rating = toPercentage(details.vote_average);
            const movieDuration = details.runtime;

            const releaseDate = toDisplayYear(details.release_date);
            return {fullPath, bgImgPath, rating, movieDuration, releaseDate};
        } catch (e) {
            console.log("error", e);
        }
    }
}

export default DetailsComponent;
