import React from 'react';
import {connect} from "react-redux";
import {loadDetailsRequest} from "../redux/actions/actions";

class MovieCard extends React.Component {

    handleClick = () => {
        this.props.loadDetailsRequest(this.props.id);
    };

    getRatingClass(cardRating) {
        const ratingNum = parseInt(cardRating.substring(0, cardRating.length - 1));
        if (ratingNum > 70) {
            return "card-rating";
        }
        if (ratingNum > 30) {
            return "card-rating purple";
        }
        return "card-rating red";
    }

    render() {
        const {fullPath, releaseDate, title, rating} = this.props;
        const cardRating = this.getRatingClass(rating);

        return <div className="card" onClick={this.handleClick}>
            <img className="card-image" src={fullPath} alt={title} ref={img => this.img = img}
                 onError={() => {
                     this.img.src = require('../assets/fallback-image.png')
                 }}/>

            <p className={cardRating}>{rating}</p>
            <p className="card-heading">{title}</p>
            <p className="card-release-date">{releaseDate}</p>
        </div>;
    }

}

const mapDispatchToProps = {
    loadDetailsRequest
};


function mapStateToProps(state, props) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);