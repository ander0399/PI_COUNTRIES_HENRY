import React from 'react'
import style from '../Nav/nav.module.css'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import { connect, useDispatch } from 'react-redux'

const Nav = ({}) => {

    return (
        <div className={style.navContainer}>
            <Link to='/' className={style.link}>
                <p>Welcome</p>
            </Link>

            <div className={style.orderContainer}>
                <p>Order By</p>
                <select name="order">
                    <option value="all">-</option>
                    <option value="a-z">A-Z</option>
                    <option value="z-a">Z-A</option>
                    <option value="> population">Higher population</option>
                    <option value="< population">Lower population</option>
                </select>
            </div>
            <SearchBar />
            <div className={style.filterContainer}>
                <p>Filter by Continent</p>
                <div className={style.selectContainer}>
                    <select name="continent">
                        <option value="all">All</option>
                        <option value="america">America</option>
                        <option value="europe">Europe</option>
                        <option value="africa">Africa</option>
                        <option value="asia">Asia</option>
                        <option value="oceania">Oceania</option>
                    </select>
                </div>
            </div>

            <div className={style.activityContainer}>
                <label>Activities</label>
                <form>
                    <input type="text" placeholder='Search Activity...' />
                    <button className={style.btn}>Search</button>
                </form>
            </div>

            <Link className={style.link2} to='/activities'>
                <p className={style.createActivity}>Create Activity</p>
            </Link>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => { }

const mapStateToProps = (state) => { }

export default connect(mapDispatchToProps, mapStateToProps)(Nav);



