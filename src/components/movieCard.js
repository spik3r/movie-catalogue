import React from 'react';
import {connect} from "react-redux";
import {loadDetailsRequest} from "../redux/actions/actions";

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick = () => {
        this.props.loadDetailsRequest(this.props.id);
    };


    render() {
        const {fullPath, releaseDate, title, rating} = this.props;

        return <div className="card" onClick={this.handleClick}>
            <img className="card-image" src={fullPath} ref={img => this.img = img} onError={()=>{this.img.src=require('../assets/fallback-image.png')}}/>

            <p className="card-rating">{rating}</p>
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