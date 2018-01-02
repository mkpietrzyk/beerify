import * as ActionTypes from './ApiActionTypes';

const url = 'https://api.punkapi.com/v2/beers';
const itemsPerPageLimit = '?per_page=10';
const requestUrl = url + itemsPerPageLimit;

export const getBeerList = () => dispatch => {
    dispatch({type: ActionTypes.GET_INITIAL_BEER_LIST});
    fetch(requestUrl).then(
        (response) => {
            return response.json();
        }
    ).then(
        (beerList) => {
            console.log('got beers', beerList);
            dispatch({type: ActionTypes.GET_INITIAL_BEER_LIST_SUCCESS, beerList: beerList});
        }
    ).catch(
        (errorFetching) => {
            dispatch({type: ActionTypes.GET_INITIAL_BEER_LIST_FAILURE, beerList: [], error: errorFetching});
            console.log('error', errorFetching);
        }
    )
}

export const getBeerListAnotherPage = (page) => dispatch => {
    dispatch({type: ActionTypes.GET_BEER_LIST_ANOTHER_PAGE});
    const currentPage = '&page=' + page;
    const currentPageRequestUrl = requestUrl + currentPage;
    fetch(currentPageRequestUrl).then(
        (response) => {
            return response.json();
        }
    ).then(
        (beerListAnotherPage) => {
            console.log('got another page', beerListAnotherPage);
            dispatch({type: ActionTypes.GET_BEER_LIST_ANOTHER_PAGE_SUCCESS, beerListAnotherPage: beerListAnotherPage})
        }
    ).catch(
        (errorFetching) => {
            dispatch({type: ActionTypes.GET_BEER_LIST_ANOTHER_PAGE_FAILURE, beerListAnotherPage: [], error: errorFetching})
        }
    )
}