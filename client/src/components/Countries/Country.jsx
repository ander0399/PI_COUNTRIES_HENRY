import React from 'react'
import style from './country.module.css'
import { Link } from 'react-router-dom'

export const Country = ({ id, name, flag, continent, activities }) => {

    return (
        <div className={style.container}>
            <Link className={style.link} to={`/countries/${id}`}>
                <h2>{name}</h2>
                <div className={style.imgContainer}>
                    <img src={flag} alt='image not found' />
                </div>
            </Link>
            <h3>{continent}</h3>
            <h3>{activities}</h3>
        </div>
    )
}