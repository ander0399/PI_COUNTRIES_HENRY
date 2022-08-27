import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { getDetail } from '../../redux/actions'
import style from './countryId.module.css'
import Activity from '../Countries/ActivityDetail.jsx'

const CountryId = () =>{
const countryDetail = useSelector((state)=>state.countryDetail)
const dispatch = useDispatch()

let  {id } = useParams()

useEffect(() =>{
    dispatch(getDetail(id))
},[id])

return (
    <div className={style.container}>
        <button className={style.btn}>
            <Link className={style.link}>
                Back
            </Link>
        </button>
        <div className={style.countryContainer}>
            <h1>{countryDetail.name}</h1>
            <div className={style.imgContainer}>
                <img src={countryDetail.flag} alt="image not found" />
            </div>
            <h3>ID: {countryDetail.id}</h3>
            <h3>Continent: {countryDetail.continent}</h3>
            <h3>Capital: {countryDetail.capital}</h3>
            <h3>Subregion: {countryDetail.subregion}</h3>
            <h3>Area: {countryDetail.area} km²</h3>
            <h3>Population: {countryDetail.population} Hab.</h3>
            <div className={style.activityContainer}>
                <Activity
                countryName = {countryDetail.name}
                activities = {countryDetail.activities}
                />
            </div>
        </div>
    </div>
)
}

export default CountryId