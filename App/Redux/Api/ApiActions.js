import * as ActionTypes from './ApiActionTypes';

const url = 'https://api.punkapi.com/v2/beers';

export const getBeerList = () => dispatch => {
    fetch(url).then(
        (response) => {
            return response.json();
        }
    ).then(
        (beerList) => {
            console.log('got beers', beerList);
            dispatch({type: ActionTypes.GET_API_REQUEST, beerList: beerList})
        }
    ).catch(
        (errorFetching) =>{
            dispatch({type: ActionTypes.GET_API_REQUEST_FAILURE, beerList: []})
            console.log('error', errorFetching);
        }
    )
}