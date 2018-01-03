import * as ActionTypes from './BeerDataActionTypes'

export const initialState = {
    currentBeerDetails: {}
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_CURRENT_BEER_DETAILS:
        {
            return {
                ...state,
                currentBeerDetails: action.currentBeerDetails
            }
        }

        default: {
            return {
                ...state
            }
        }
    }

}
