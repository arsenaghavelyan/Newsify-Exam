import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { selectSearch } from '../store/slices/searchSlice';
import { API_KEY, SearchAPI_URL } from '../lib/data';
import SearchNewsForm from './SearchNewsForm';
import Popup from './Popup';

export default function Search() {

    const [searchResult, setSearchResult] = useState([])

    const search = useSelector(selectSearch)


    useEffect(() => {
        fetch(`${SearchAPI_URL}?q=${search}&apiKey=${API_KEY}`).then((response) => {
            return response.json()
        }).then((res) => {
            setSearchResult(res.articles)
        })
    }, [search])

    return (
        <div className='flex flex-wrap bg-gray-600 gap-[20px] justify-center items-center '>
            {
                searchResult.map((el) => {
                    return (
                        <div key={Math.random()}  >
                            <SearchNewsForm info={el} />
                        </div>
                    )
                })
            }            
        </div>
    )
}
