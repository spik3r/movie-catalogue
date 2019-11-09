import React from 'react';
function SearchBar() {
    return <div className="search-bar">
        <input className="search-input" type="text" placeholder="Search.."/>
        <button className="search-button" type="submit">
            <i className="fa fa-search"></i>
        </button>

    </div>;
}
export default SearchBar;
