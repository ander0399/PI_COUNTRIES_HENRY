import React, { useEffect, useState } from 'react'
import style from '../Nav/nav.module.css'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { connect, useDispatch } from 'react-redux'
import {
    getCountries,
    orderPopulation,
    orderPopulationRev,
    orderContinent,
    orderAlpha,
    orderAlphaRev,
    showActivity
} from '../../redux/actions/index.js'

const Nav = ({
    getCountries,
    orderPopulation,
    orderPopulationRev,
    orderContinent,
    orderAlpha,
    orderAlphaRev,
    showActivity
}) => {

    const [order, setOrder] = useState('')
    const [continent, setContinent] = useState('')
    const [activity, setActivity] = useState('')
    const dispatch = useDispatch()


    useEffect(() => {
        if (continent) {
            console.log("continent: " + continent)
            getCountries()
            if (continent !== 'all') {
                setTimeout(() => {
                    dispatch(orderContinent(continent))
                },200)
            }
        }
    }, [continent])

    useEffect(() => {
        console.log('order: ' + order)
        if (order === 'all') getCountries()
        else if (order === 'a-z') orderAlpha()
        else if (order === 'z-a') orderAlphaRev()
        else if (order === '>') orderPopulation()
        else if (order === '<') orderPopulationRev()
    }, [order])


    const searchActHandler = (e) => {
        e.preventDefault()

        getCountries()
        setTimeout(() => {
            dispatch(showActivity(activity))
        }, 200)
    }

    const setActHandler = (e) => {
        e.preventDefault()

        setActivity(e.target.value)
    }

    
    return (
        <div className={style.navContainer}>
            <Link to='/' className={style.link}>
                <p>Welcome</p>
            </Link>

            <div className={style.orderContainer}>
                <p>Order By</p>
                <select id='order' onChange={(e) => setOrder(e.target.value)}>
                    <option value="all">all</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value=">">Higher population</option>
                    <option value="<">Lower population</option>
                </select>
            </div>
            <SearchBar />
            <div className={style.filterContainer}>
                <p>Filter by Continent</p>
                <div className={style.selectContainer}>
                    <select name='continent' id='continent' onChange={(e) => setContinent(e.target.value)}>
                        <option value="all">All</option>
                        <option value="Americas">America</option>
                        <option value="Europe">Europe</option>
                        <option value="Africa">Africa</option>
                        <option value="Asia">Asia</option>
                        <option value="Oceania">Oceania</option>
                        <option value="Antarctic">Antarctic</option>
                    </select>
                </div>
            </div>

            <div className={style.activityContainer}>
                <label>Activities</label>
                <form>
                    <input
                        type="text"
                        placeholder='Search Activity...'
                        value={activity}
                        onChange={setActHandler}
                    />
                    <button
                        className={style.btn}
                        onClick={searchActHandler}
                    >
                        Search</button>
                </form>
            </div>

            <Link className={style.link2} to='/activities'>
                <p className={style.createActivity}>Create Activity</p>
            </Link>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCountries: () => dispatch(getCountries()),
        orderPopulation: () => dispatch(orderPopulation()),
        orderPopulationRev: () => dispatch(orderPopulationRev()),
        orderContinent: (continent) => dispatch(orderContinent(continent)),
        orderAlpha: () => dispatch(orderAlpha()),
        orderAlphaRev: () => dispatch(orderAlphaRev()),
        showActivity: (payload) => dispatch(showActivity(payload))
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav);


