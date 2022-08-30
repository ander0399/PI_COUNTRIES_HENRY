import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import style from './activities.module.css'
import FindCountry from '../Activities/FindCountry.jsx'
import {createActivity, getName} from '../../redux/actions/index.js'

const ActivityForm = () => {
    const countries = useSelector((state) => state.countries)
    const [currentPage,setCurrentPage] = useState(0)
    const [inputName, setInputName] = useState('')
    const dispatch = useDispatch()
    const [inputsForm,setInputsForm] = useState({
        name:'',
        difficulty:'',
        duration:'',
        season:'',
        countryId:[]
    })

    let next = () =>{
        if(countries.length <= currentPage + 10){
            setCurrentPage(currentPage)
        }else{
            setCurrentPage(currentPage + 10)
        }
    }

    let prev = () =>{
        if(currentPage < 9){
            setCurrentPage(0)
        }else{
            setCurrentPage(currentPage - 10)
        }
    }

    const setIdHandler = (e) => {
        e.preventDefault()
     
        setInputsForm({
            ...inputsForm,
            [e.target.name]:inputsForm[e.target.name].concat(e.target.value)
        })

        alert('Country add!')
    }
    
    const submitInputName = (e) => {
        e.preventDefault()

        setInputName(e.target.value)
    }

    useEffect(()=>{
        dispatch(getName(inputName))
    },[inputName])

    const setDataHandler = (e) => {
        e.preventDefault()

        setInputsForm({
            ...inputsForm,
            [e.target.name]: e.target.value
        })
    }

    const resetState = () =>{
        setInputsForm({
            name:'',
            difficulty:0,
            duration:0,
            season:'',
            countryId:[]
        })
        setInputName('')
    }

    const submitForm = (e) =>{
        e.preventDefault()
        var form = true
        if(inputsForm['name'].length < 2){
            form = false
        }else if(!inputsForm['countryId'].length >= 1){
            form = false
        }

        if(form){
            dispatch(createActivity(inputsForm))
            .then(() => resetState())
            .then(() => alert('Activity Created!'))
        }else{
           return alert('There are empty fields, the activity cannot be created!')
        }
    }


    useEffect(()=>{
        setCurrentPage(0)
    },[countries])


    const CountriesFilter = countries.slice(currentPage,currentPage+9)

    return (
        <div>
            <div className={style.navContainer}>
                <Link to='/countries' className={style.link}>
                    <p>Welcome</p>
                </Link>
                <form className={style.navContainer} onSubmit={(e)=>submitForm(e)}>
                    <div>
                    <label >Name </label>
                        <input
                            className={style.input}
                            type="text"
                            placeholder='Activity name...'
                            name='name'
                            value={inputsForm.name}
                            onChange={setDataHandler}
                        />
                    </div>
                    <div className={style.difficultyContainer}>
                        <label >Difficulty</label>
                        <select
                            name="difficulty"
                            value={inputsForm.difficulty}
                            id='dif'
                            onChange={setDataHandler}
                        >
                            <option value=''>-</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                    <div className={style.durationContainer}>
                        <label>Duration in hours</label>
                        <select
                            name='duration'
                            value={inputsForm.duration}
                            id='durt'
                            onChange={setDataHandler}
                        >
                            <option value=''>-</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                            <option value={11}>11</option>
                            <option value={12}>12</option>
                            <option value={13}>13</option>
                            <option value={14}>14</option>
                            <option value={15}>15</option>
                            <option value={16}>16</option>
                            <option value={17}>17</option>
                            <option value={18}>18</option>
                            <option value={19}>19</option>
                            <option value={20}>20</option>
                            <option value={21}>21</option>
                            <option value={22}>22</option>
                            <option value={23}>23</option>
                            <option value={24}>24</option>
                        </select>
                    </div>
                    <div className={style.seasonContainer}>
                        <label>Season</label>
                        <select
                            name="season"
                            value={inputsForm.season}
                            id='season'
                            onChange={setDataHandler}
                        >
                             <option value=''>-</option>
                            <option value='Autumn'>Autumn</option>
                            <option value='Winter'>Winter</option>
                            <option value='Spring'>Spring</option>
                            <option value='Summer'>Summer</option>
                        </select>
                    </div>
                    <div className={style.countryContainer}>
                        <label>Countries </label>
                        <input 
                        className={style.input}
                        type="text" 
                        placeholder='Country name...'
                        onChange={submitInputName}
                        />
                    </div>
                    <div>
                        <input 
                         className={style.btn}
                         type='submit'
                         value='Add activity'
                         />
                    </div>
                </form>
            </div>
            <button onClick={prev} className={style.btn}>
                {'<'} Prev
            </button>
            <button onClick={next} className={style.btn}>
               Next {'>'} 
            </button>
            <div className={style.orderContainer}>
                {
                    CountriesFilter.map((c)=>(

                        <div className={style.findCountryContainer}>
                            <div>
                               <FindCountry
                               key={c.id}
                               name={c.name}
                               flag={c.flag}
                               />
                               <button
                               className={style.btn}
                               name='countryId'
                               value={c.id}
                               onClick={setIdHandler}
                               >
                                Add Country
                               </button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default ActivityForm