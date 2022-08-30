import React from 'react'
import style from './findCountry.module.css'

const FindCountry = ({name, flag, id}) => {
    return (
        <div>
            <img className={style.img} src={flag} alt="image not found" />
            <p className={style.name}>{name}</p> 
            <p>{id}</p>
        </div>
    )
}

export default FindCountry