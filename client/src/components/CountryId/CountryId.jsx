import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link,useParams } from 'react-router-dom'
import { getDetail } from '../../redux/actions'
import style from './countryId.module.css'
import Activity from '../Countries/ActivityDetail.jsx'

const CountryId = () =>{
const countryDetail = useSelector((state)=>state.countryDetail)
// const country = useSelector((state)=>state.countries)
const dispatch = useDispatch()

let  { id } = useParams()
console.log(id)
useEffect(() =>{
    dispatch(getDetail(id))
},[id])

console.log(countryDetail,'countryDetail: ')
// console.log('country activities: '+country.activities)

return (
    <div className={style.container}>
        <button className={style.btn}>
            <Link className={style.link} to='/countries'>
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
                activities = {countryDetail.Activities}
                />
            </div>
        </div>
    </div>
)
}

export default CountryId