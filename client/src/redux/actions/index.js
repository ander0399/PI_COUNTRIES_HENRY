import axios from 'axios';
import {
    GET_COUNTRIES,
    GET_DETAIL,
    GET_NAME,
    ORDER_ALPHA,
    ORDER_ALPHA_REV,
    ORDER_POPULATION,
    ORDER_POPULATION_REV,
    ORDER_CONTINENT,
    SHOW_ACTIVITY
} from './actionsName';


const url = 'http://localhost:3001'

export function getCountries() {
    return async function (dispatch) {
        const res = await axios.get(`${url}/countries`)
        dispatch({
            type: GET_COUNTRIES,
            payload: res.data
        })
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        const res = await axios.get(`${url}/countries/${id}`)
        dispatch({
            type: GET_DETAIL,
            payload: res.data
        })
    }
}

export function getName(name) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries?name=${name}`)
            return dispatch({
                type: GET_NAME,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function createActivity(activity) {
    return async function () {
        try {
            const res = await axios.post(`${url}/activities`, activity)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}


export const showActivity = (payload) => {
    return {
        type: SHOW_ACTIVITY,
        payload
    }
}

export function orderPopulation() {
    return {
        type: ORDER_POPULATION,
    }
}

export function orderPopulationRev() {
    return {
        type: ORDER_POPULATION_REV,
    }
}

export const orderContinent = (payload) => {
    return {
        type: ORDER_CONTINENT,
        payload
    }
}

export function orderAlpha() {
    return {
        type: ORDER_ALPHA,
    }
}

export function orderAlphaRev() {
    return {
        type: ORDER_ALPHA_REV,
    }
}



