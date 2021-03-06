import * as ActionTypes from './ApiActionTypes'

export const initialState = {
    beerList: [],
    beerListAnotherPage: [],
    similarBeers: [],
    currentPage: 1,
    error: '',
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.GET_INITIAL_BEER_LIST_SUCCESS: {
            return {
                ...state,
                beerList: action.beerList
            }
        }

        case ActionTypes.GET_BEER_LIST_ANOTHER_PAGE_SUCCESS: {
            return {
                ...state,
                beerList: state.beerList.concat(action.beerListAnotherPage)
            }
        }

        case ActionTypes.GET_SIMILAR_BEERS_SUCCESS: {
            return {
                ...state,
                similarBeers: action.similarBeers
            }
        }

        case ActionTypes.GET_BEER_LIST_ANOTHER_PAGE_FAILURE:
        case ActionTypes.GET_INITIAL_BEER_LIST_FAILURE:
        case ActionTypes.GET_SIMILAR_BEERS_FAILURE: {
            return {
                ...state,
                error: action.error
            }
        }

        case ActionTypes.INCREASE_PAGE_COUNT: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        default: {
            return {
                ...state
            }
        }
    }

}
