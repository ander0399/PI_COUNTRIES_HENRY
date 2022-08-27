import React from 'react'
import style from './activityDetail.module.css'
import { Link } from 'react-router-dom'

const Activity = ({ countryName, activities }) => {

    if (activities && activities.length > 0) {
        return (
            <div>
                <h3>Activities to do in {countryName}</h3>
                <table className={style.activitiesTable}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Duration(h)</th>
                            <th>Season</th>
                            <th>Difficulty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            activities.map((a) => (
                                <tr key={a.id}>
                                    <td>{a.name}</td>
                                    <td>{a.duration}</td>
                                    <td>{a.season}</td>
                                    <td>{a.difficulty}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    } return (
        <Link className={style.link} to='/activities'>
            <h3>This country has no activities,<br/><span className={style.span}>add one!!</span></h3>
        </Link>
    )

}

export default Activity