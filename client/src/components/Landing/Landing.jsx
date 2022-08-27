import React from 'react'
import {Link} from 'react-router-dom'
import style from './landing.module.css'

export function Landing(){
    return (
        <div>
            <div className={style.container} >
                <h1>A walk around the world!</h1>
                <div className={style.div}>
                    <button className={style.button}>
                        <Link className={style.link} to='/countries'>
                            START!
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Landing;