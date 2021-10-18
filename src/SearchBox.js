import React from "react";


const SearchBox = ({ searchfield, searchChange }) => {
    return (
        <div>
            <input 
            type="search" 
            placeholder="Search Robots" 
            className="input-reset ba b--black-20 pa2 mb2  w-30 bg-light-green"
            onChange = {searchChange}
            >
            </input>
        </div>
    )
}

export default SearchBox;