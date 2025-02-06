import React, {useState} from 'react';
import SearchBar from '../presentationals/SearchBar';

function AppCont(){
    const [searchVal, setSearchVal] = useState("");
    const handleSearchChange = ({target}) => setSearchVal(target.value);

    //const apiBase = "https://api.music.apple.com/v1/catalog/us/search";
    //const searchParams = `/types=songs&term=${searchVal}`


    //Refactor to use Apple Music API submission
    function handleSearch(e){
        e.preventDefault();
        alert(`Fetching songs...`);
        setSearchVal("");
    }
        
    return (
        <div>
            <div>
                <SearchBar handleSearchChange={handleSearchChange} handleSearch={handleSearch} searchVal={searchVal} />
            </div>
        </div>
    )
}

export default AppCont;