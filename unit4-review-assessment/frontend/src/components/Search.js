import React from 'react';

const Search = ({handleSubmit, searchObjInput}) => {
    return (

        <form
        className="searchForm"
        onSubmit={e =>{
            handleSubmit(e)
        }}>
            <input id="searchInput"
            type='text'
            {...searchObjInput} placeholder="What is on your mind"/>

            <button id="searchBttn" type="submit">Search</button>
        </form>

    )
}

export default Search;
