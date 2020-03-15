import React from 'react'

function Search(props) {
    return (
        <div>
            <input onChange={props.handleinput} className='search' placeholder='Search for a Movie Title...' type='search'></input>

        </div>
    )
}

export default Search;
