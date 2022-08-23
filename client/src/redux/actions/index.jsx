import axios from 'axios';
import {
    GET_COUNTRIES,
    GET_DETAIL,
    BY_NAME,
    BY_ORDER,
    BY_POPULATION,
    BY_CONTINENT,
    GET_ACTIVITY,
    BY_ACTIVITY,
    FAILURE,
    LOADING
} from './actionsName';


const url = 'http://localhost:3001'

export function getCountries() {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries`)
            return dispatch({
                type: GET_COUNTRIES,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                payload: error.response.data.smg
            })
        }
    }
}

export function getDetail(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`${url}/countries/${id}`)
            return dispatch({
                type: GET_DETAIL,
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
            const res = await axios.post(`${url}/activities/`, activity)
            return res;
        } catch (error) {
            console.log(error)
        }
    }
}

export function getByName(name) {
    return async function () {
        try {
            const res = await axios.get(`${url}/countries?name=${name}`)
            return dispatch({
                type: BY_NAME,
                payload: res.data
            })
        } catch (error) {
            return dispatch({
                type: FAILURE,
                payload: error.response.data.msg
            })
        }
    }
}

export function getActivity() {
    return async function () {
        try {
            const res = await axios.get(`${url}/activities`)
            return dispatch({
                type: GET_ACTIVITY,
                payload: res.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}

export function byOrder(payload) { 
    return {
        type:BY_ORDER,
        payload
    }
}

export function byPopulation(payload) {
    return {
        type:BY_POPULATION,
        payload
    }
 }

export function byContinet(payload) {
    return {
        type:BY_CONTINENT,
        payload
    }
}

export function byActivity(payload) {
    return {
        type:BY_ACTIVITY,
        payload
    }
}



