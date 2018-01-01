import * as ActionTypes from './ApiActionTypes'

export const initialState = {
    beerList: [],
    beerType: '',
    beerVolume: 0,
    beerIDA: null
}

export function reducer(state = initialState, action) {
    switch(action.type){
        case ActionTypes.GET_API_REQUEST: {
            return {
                ...state,
                beerList: action.beerList
            }
        }

        default: {
            return {
                ...state
            }
        }
    }

}
