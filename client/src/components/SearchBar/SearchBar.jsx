import React from 'react'
import style from './searchBar.module.css'

const SearchBar = () =>{

return (
    <div className={style.searchContainer}>
        <input className={style.input} type="text" placeholder='Search Country...' />
        <div>
            <button className={style.btn}>Search</button>
            <button className={style.btn}>Reset</button>
        </div>
    </div>
)
}

export default SearchBar