import React, {Component} from "react";
import DetailsComponent from "../components/detailsComponent";
import {goHome} from "../util/navigation";
import {connect} from "react-redux";

class DetailScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <DetailsComponent details={this.props.details} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

