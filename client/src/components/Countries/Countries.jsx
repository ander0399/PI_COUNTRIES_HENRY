import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './countries.module.css'
import { Country } from './Country'

const Countries = () => {

    const countries = useSelector((state) => state.countries)
    const [currentPage, setCurrentPage] = useState(0);

    let next = () => {
        if (countries.length <= currentPage + 10) {
            setCurrentPage(currentPage)
        } else {
            setCurrentPage(currentPage + 10)
        }
    }

    let prev = () => {
        if (currentPage < 9) {
            setCurrentPage(0)
        } else {
            setCurrentPage(currentPage - 10)
        }
    }

    let last = () => {
        setCurrentPage(countries.length - 10)
    }

    let first = () => {
        setCurrentPage(0)
    }

    useEffect(()=>{
        first()
    },[countries])

    const countriesFilter = countries.slice(currentPage, currentPage + 10)
    return (
        <div >
            <button className={style.btn} onClick={first}> {'<<'} First Page  </button>
            <button className={style.btn} onClick={prev}> {'<'} Prev Page  </button>
            <button className={style.btn} onClick={next}> Next Page {'>'} </button>
            <button className={style.btn} onClick={last}> Last Page {'>>'} </button>
            <div className={style.grid}>
                {
                    countriesFilter.map((c) => (
                        <Country
                            id={c.id}
                            flag={c.flag}
                            name={c.name}
                            continent={c.continent}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Countries