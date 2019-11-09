import React, {Component} from 'react';
import LoadingSpinner from "./LoadingSpinner";

class Modal extends Component {
    render() {
        if (this.props.show) {
            return <div className="modal">
                <LoadingSpinner/>
            </div>
        }
        return null;
    }
}

export default Modal;