import React from 'react';
import './search-bar.style.css';

const SearchBar = () => {
    return(
        <div className="search-bar-container">
            <div className="search-input">
                <input type="text" placeholder="Search..."/>
            </div>
            <div className="search-input">
                <input type="checkbox"/> Only show products in stock
            </div>
        </div>
    );
}

export default SearchBar;