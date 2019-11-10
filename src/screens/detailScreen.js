import React, {Component} from "react";
import DetailsComponent from "../components/detailsComponent";
import {connect} from "react-redux";
import {loadDetailsRequest} from "../redux/actions/actions";
import {getId} from "../util/mapper";
import {withRouter} from "react-router-dom";

class DetailScreen extends Component {

    render() {

        return this.safeDisplayDetails();
    }

    safeDisplayDetails() {
        //Fix for bug caused by refreshing while on the details page or typing in a random movieId
        if (this.props.details === undefined) {
            const id = getId(this.props.location.pathname);
            this.props.loadDetailsRequest(id);
            return null;
        } else {

            return <DetailsComponent details={this.props.details}/>
        }
    }
}

const mapDispatchToProps = {
    loadDetailsRequest
};

function mapStateToProps(state, props) {
    return {
        isLoading: state.moviesReducer.isLoading,
        details: state.moviesReducer.details,
        id: state.moviesReducer.id
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailScreen));

