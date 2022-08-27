import React, { useEffect } from 'react'
import Nav from '../Nav/Nav.jsx'
import Countries from '../Countries/Countries.jsx'
import { useDispatch } from 'react-redux'
import { getCountries } from '../../redux/actions/index.js'

export function Home() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCountries())
    },[dispatch])
    
    return (
        <div>
            <Nav/>
            <div>
                <Countries />
            </div>
        </div>
    )
}

export default Home