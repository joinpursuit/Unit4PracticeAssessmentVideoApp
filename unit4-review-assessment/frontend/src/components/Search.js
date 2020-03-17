import React , {useEffect, useEffect } from 'react';
// import axios from 'axios';

const Search = () =>{
    const[list, setList] = useState([]);
    const [suggest, setSuggest] = useState([]);
    const [search, setSearch] = useState("");

    const handleChange =(e) =>{
        const value = e.target.value;
        let suggest = [];
        if(value.length > 0){
            const regex = new RegExp(`${value}, i`);
            suggest = list.sort().filter(el => regex.test(el)) 
        }
        setSuggest(suggest);
        setSearch(value);
    }

    const handleSelected=(value)=>{
        setSearch(value);
        setSuggest([]);
    }

    


}

export default Search;