import React, {Component} from 'react';
import {searchRequest} from "../redux/actions/actions";
import {connect} from "react-redux";
import navTo from "../util/navigation";

class SearchBar extends Component {

    state = {
        showError: false
    };

    isValid = () => {
        if (!this.state.searchTerm || this.state.searchTerm.length < 1) {
            this.setState({showError: true})
            return false;
        } else {
            this.setState({showError: false})
            return true;
        }
    };

    handleSearchTermChange = e => {
        this.setState({
            searchTerm: e.target.value
        });
    };

    handleClick = e => {
        if (this.isValid()) {
            this.props.searchRequest(this.state.searchTerm);
            navTo("search")
        }
    };

    handleKeyDown = e => {
        if (e.key === 'Enter') {
            console.log('enter pressed');
            this.handleClick();
        }
    };

    render() {
        return <>
            <div className="search-bar">
                <input required onChange={this.handleSearchTermChange} onKeyDown={this.handleKeyDown}
                       className={this.state.showError ? "search-input error" : "search-input"} type="text"
                       placeholder="Search.."/>
                <button className="search-button" onClick={this.handleClick}>
                    <i className="fa fa-search"></i>
                </button>
            </div>
            <div className={this.state.showError ? "error-message" : "error-message-hidden"}>Please Enter a Movie
                name!
            </div>
        </>;
    }
}


const mapDispatchToProps = {
    searchRequest
};


function mapStateToProps(state, props) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);

