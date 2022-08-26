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
} from '../actions/actionsName';

const inicialState = {
    countries: [],
    countriesDetail: [],
}

const orderAlpha = (a, b) => {
    if (a.name < b.name) return -1
    if (a.name > b.name) return 1
    return 0
}

const orderPopulation = (a, b) => {
    return a.population - b.population
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case GET_DETAIL:
            return {
                ...state,
                countriesDetail: action.payload
            }
        case GET_NAME:
            return {
                ...state,
                countries: action.payload
            }
        case ORDER_ALPHA:
            return {
                ...state,
                countries: state.countries.slice().sort(orderAlpha)
            }
        case ORDER_ALPHA_REV:
            return {
                ...state,
                countries: state.countries.slice().sort(orderAlpha).reverse()
            }
        case ORDER_POPULATION:
            return {
                ...state,
                countries: state.countries.slice().sort(orderPopulation)
            }
        case ORDER_POPULATION_REV:
            return {
                ...state,
                countries: state.countries.slice().sort(orderPopulation).reverse()
            }
        case ORDER_CONTINENT:
            return {
                ...state,
                countries: state.countries.filter((c) => c.continent === action.payload)
            }
        case SHOW_ACTIVITY:
            return {
                ...state,
                countries: state.countries.filter((c) =>{return c.activities.some((a) => a.name === action.payload)})
            }

        default: return state;

    }
}


export default rootReducer;