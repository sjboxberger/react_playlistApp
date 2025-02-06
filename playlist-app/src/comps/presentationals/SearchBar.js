import React from 'react';

function SearchBar({handleSearchChange, handleSearch, searchVal}){
    return (
        <form onSubmit={handleSearch}>
            <label for='song'>Enter a song: </label>
            <input type='text' id='song' onChange={handleSearchChange} value={searchVal}/>
            <br></br>
            <button type='submit'>Search</button>
        </form>
    )
};

export default SearchBar;