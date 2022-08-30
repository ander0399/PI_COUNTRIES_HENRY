import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getName } from '../../redux/actions'
import style from './searchBar.module.css'

const SearchBar = () =>{

    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const setInputHandler = (e) =>{
        e.preventDefault()

        setInput(e.target.value)
    }

    useEffect(()=>{
        dispatch(getName(input))
    },[input])

return (
    <div className={style.searchContainer}>
        <input 
        className={style.input} 
        type="text" 
        placeholder='Search Country...' 
        onChange={(e)=>setInputHandler(e)}
        />
    </div>
)
}

export default SearchBar