import React from 'react';
import {goBack} from "../util/navigation";

function BackButton() {
    return <>
        <i className="fa fa-arrow-left back-arrow" onClick={goBack}></i>
    </>;
}
export default BackButton;