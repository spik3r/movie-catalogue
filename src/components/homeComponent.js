import React from 'react';
import {connect} from "react-redux";

class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="details-top-spacer">
            <p>Movies or TV shows?</p>
            <button className="button" onClick={() => {}}>Popular Movies</button>
        </div>;
    }

};

const mapDispatchToProps = {
};


function mapStateToProps(state, props) {
    return {
        questions: state.questionsReducer.questions,
        answers: state.navReducer.answers
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);