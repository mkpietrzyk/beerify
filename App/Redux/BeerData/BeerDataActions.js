import * as ActionTypes from './BeerDataActionTypes';

export const setCurrentBeerDetails = beer => dispatch => {
    dispatch({type: ActionTypes.SET_CURRENT_BEER_DETAILS, currentBeerDetails: beer});
}