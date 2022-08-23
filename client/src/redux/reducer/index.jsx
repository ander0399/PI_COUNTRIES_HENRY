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
    countries: [],
    continents: [],
    population: [],
    allActivities: [],
    activity: [],
    details: [],
    error: "",
    loading: false,
}

function reducer(state = inicialState, action) {
    switch (state.type) {
        case GET_COUNTRIES:
            return {}
        case GET_DETAIL:
            return {}
        case GET_ACTIVITY:
            return {}
        case BY_NAME:
            return {}
        case BY_ORDER:
            return {}
        case BY_POPULATION:
            return {}
        case BY_CONTINENT:
            return {}
        case BY_ACTIVITY:
            return {}
        case FAILURE:
            return {
                ...state,
                error: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading:true
            }

        default: return state;

    }
}


export default reducer;