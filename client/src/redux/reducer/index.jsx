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
} from '../actions/actionsName';

const inicialState = {
    countries:[],
    continents:[],
    population :[],
    allActivities:[],
    activity:[],
    details:[],
    error:"",
    loadin:false,
}

function reducer(){}


export default reducer;