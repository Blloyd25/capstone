import React, { useState } from 'react';
import './searchBar.css';

const SearchBar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        props.filterJobs(searchTerm)
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type='text' placeholder='whats the problem?'></input>
            <button type='submit'>Search</button> 
            </form>
        </div>
    )
}

export default SearchBar;